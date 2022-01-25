const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var config = require('./config/db.config')

var mysql = require('mysql2')

var PORT = process.env.port || 3000

var conn = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD
});

conn.connect(function(err) {
    if (err) throw err; 
    console.log("Connected to on-the-block-db!")
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, function(error){
    if (error) throw error
    console.log("Server created Successfully on PORT", PORT)
})