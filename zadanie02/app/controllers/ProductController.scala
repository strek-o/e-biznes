package controllers

import javax.inject._
import play.api.mvc._
import models.Product
import scala.collection.mutable.ListBuffer

@Singleton
class ProductController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  val productList = ListBuffer(
    Product(1, "Example01", 1.11),
    Product(2, "Example02", 2.22),
    Product(3, "Example03", 3.33)
  )

  def getAll() = Action { implicit request: Request[AnyContent] =>
    val response = productList.map(p => s"(${p.id}, ${p.name}, ${p.price})").mkString("\n")
    Ok(response)
  }

  def get(id: Int) = Action {
    productList.find(p => p.id == id) match {
      case Some(p) => Ok(s"(${p.id}, ${p.name}, ${p.price})")
      case None => NotFound(s"Not Found")
    }
  }

  def add(id: Int, name: String, price: Double) = Action {
    productList += Product(id, name, price)
    Ok(s"OK")
  }

  def update(id: Int, newName: String, newPrice: Double) = Action {
    val index = productList.indexWhere(p => p.id == id)
    if (index >= 0) {
      productList(index) = Product(id, newName, newPrice)
      Ok(s"OK")
    } else {
      NotFound(s"Not Found")
    }
  }

  def delete(id: Int) = Action {
    val index = productList.indexWhere(p => p.id == id)
    if (index >= 0) {
      productList.remove(index)
      Ok(s"OK")
    } else {
      NotFound(s"Not Found")
    }
  }
}
