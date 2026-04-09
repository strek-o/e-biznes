package controllers

import (
	"echo-crud/databases"
	"echo-crud/models"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

func GetAllProducts(c echo.Context) error {
	var list []*models.Product
	for _, p := range databases.ProductsDB {
		list = append(list, p)
	}
	return c.JSON(http.StatusOK, list)
}

func GetProduct(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	if p, ok := databases.ProductsDB[id]; ok {
		return c.JSON(http.StatusOK, p)
	}
	return c.JSON(http.StatusNotFound, "NotFound")
}

func CreateProduct(c echo.Context) error {
	p := &models.Product{
		ID: databases.Seq,
	}
	if err := c.Bind(p); err != nil {
		return err
	}

	databases.ProductsDB[p.ID] = p
	databases.Seq++

	return c.JSON(http.StatusCreated, p)
}

func UpdateProduct(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	p, ok := databases.ProductsDB[id]
	if !ok {
		return c.JSON(http.StatusNotFound, "NotFound")
	}

	updatedProduct := new(models.Product)
	if err := c.Bind(updatedProduct); err != nil {
		return err
	}

	p.Name = updatedProduct.Name
	p.Price = updatedProduct.Price

	return c.JSON(http.StatusOK, p)
}

func DeleteProduct(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	if _, ok := databases.ProductsDB[id]; ok {
		delete(databases.ProductsDB, id)
		return c.NoContent(http.StatusNoContent)
	}
	return c.JSON(http.StatusNotFound, "NotFound")
}
