const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./routes/routes')

var PORT = process.env.port || 3000

app.listen(PORT, function(error){
    if (error) throw error
    console.log("Server created Successfully on PORT", PORT);
})

// map routers to URLs
app.use('/', router);

module.exports = app;