const { Product } = require('../models/product.model')

module.exports.newProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.status(400).json(err))
}

module.exports.allProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}

module.exports.oneProduct = (req, res) => {
    const {id} = req.params
    Product.findOne({_id: id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    const {id} = req.params
    Product.deleteOne({ _id: id })
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}

module.exports.updateProduct = (req, res) => {
    const {id} = req.params
    console.log(id);
    Product.findOneAndUpdate({_id: id}, req.body)
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err))
}