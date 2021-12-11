var express = require('express')
var mysql = require('mysql2')
var app = express()
var connection = require('./database')

app.get('/', function (req, res) {
  let sql = 'SELECT * FROM EMPLOYEE'
  connection.query(sql, function (err, results) {
    if (err) throw err
    res.send(results)
  })
})

app.listen(5000, function () {
  console.log('App Listening on port 5000')
  connection.connect(function (err) {
    if (err) throw err
    console.log('Database test_db2 connected')
  })
})
