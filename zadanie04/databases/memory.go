package databases

import "echo-crud/models"

var (
	ProductsDB = map[int]*models.Product{
		1: {ID: 1, Name: "Example01", Price: 11.11},
		2: {ID: 2, Name: "Example02", Price: 22.22},
		3: {ID: 3, Name: "Example03", Price: 33.33},
	}

	Seq = 4
)
