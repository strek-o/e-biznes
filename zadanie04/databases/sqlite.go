package databases

import (
	"echo-crud/models"
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	var err error
	DB, err = gorm.Open(sqlite.Open("./databases/products.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("ConnectionError", err)
	}

	err = DB.AutoMigrate(&models.Product{})
	if err != nil {
		log.Fatal("MigrationError", err)
	}
}
