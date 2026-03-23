package controllers

import javax.inject._
import play.api.mvc._
import models.Product

@Singleton
class ProductController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  val productList = List(
    Product(1, "Example01", 1.11),
    Product(2, "Example02", 2.22),
    Product(3, "Example03", 3.33)
  )

  def getAll() = Action { implicit request: Request[AnyContent] =>
    val response = productList.map(p => s"(${p.id}, ${p.name}, ${p.price})").mkString("\n")
    Ok(response)
  }
}
