package controllers

import (
	"echo-crud/databases"
	"echo-crud/models"
	"net/http"

	"github.com/labstack/echo/v4"
)

func GetAllProducts(c echo.Context) error {
	var products []models.Product
	databases.DB.Find(&products)

	return c.JSON(http.StatusOK, products)
}

func GetProduct(c echo.Context) error {
	id := c.Param("id")
	var p models.Product

	if err := databases.DB.First(&p, id).Error; err != nil {
		return echo.NewHTTPError(http.StatusNotFound, "NotFound")
	}

	return c.JSON(http.StatusOK, p)
}

func CreateProduct(c echo.Context) error {
	p := new(models.Product)
	if err := c.Bind(p); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, err.Error())
	}

	databases.DB.Create(p)

	return c.JSON(http.StatusCreated, p)
}

func UpdateProduct(c echo.Context) error {
	id := c.Param("id")
	var p models.Product

	if err := databases.DB.First(&p, id).Error; err != nil {
		return echo.NewHTTPError(http.StatusNotFound, "NotFound")
	}

	updatedData := new(models.Product)
	if err := c.Bind(updatedData); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, err.Error())
	}

	p.Name = updatedData.Name
	p.Price = updatedData.Price
	databases.DB.Save(&p)

	return c.JSON(http.StatusOK, p)
}

func DeleteProduct(c echo.Context) error {
	id := c.Param("id")
	var p models.Product

	if err := databases.DB.First(&p, id).Error; err != nil {
		return echo.NewHTTPError(http.StatusNotFound, "NotFound")
	}

	databases.DB.Delete(&p)

	return c.NoContent(http.StatusNoContent)
}
