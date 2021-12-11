var mysql = require('mysql2')

var connection = mysql.createConnection({
  host: 'localhost',
  database: 'test_db2',
  user: 'root',
  password: 'root'
})

module.exports = connection
