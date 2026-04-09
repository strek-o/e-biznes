package main

import (
	"echo-crud/databases"
	"echo-crud/routes"
	"log"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	databases.ConnectDB()
	e := echo.New()

	e.Use(middleware.RequestLoggerWithConfig(middleware.RequestLoggerConfig{
		LogMethod: true,
		LogURI:    true,
		LogStatus: true,
		LogValuesFunc: func(c echo.Context, v middleware.RequestLoggerValues) error {
			log.Printf("Method: %s\tURI: %s\tStatus: %d\n", v.Method, v.URI, v.Status)
			return nil
		},
	}))

	e.Use(middleware.Recover())
	routes.SetupRoutes(e)
	e.Logger.Fatal(e.Start(":8080"))
}
