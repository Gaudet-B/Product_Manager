const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/product_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established connection to product_db"))
    .catch(err => console.log("Could not connect to the db", err))