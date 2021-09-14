const ProductController = require('../controllers/product.controller')

module.exports = app => {
    app.post("/api/products/new", ProductController.newProduct)
    app.get("/api/products", ProductController.allProducts)
    app.get("/api/products/:id", ProductController.oneProduct)
    app.delete("/api/products/:id", ProductController.deleteProduct)
}