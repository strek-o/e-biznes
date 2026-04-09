package models

type Product struct {
	ID    int     `gorm:"primaryKey" json:"id"`
	Name  string  `json:"name"`
	Price float64 `json:"price"`
}
