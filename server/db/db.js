var config = require('../config');
var mysql = require('mysql2');

var conn = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD
});

conn.connect(function(err) {
    if (err) throw err; 
    console.log("Connected to on-the-block-db!");
});

module.exports = {
    conn
}