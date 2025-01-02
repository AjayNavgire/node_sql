const mysql = require('mysql2');
const dotenv = require("dotenv");

dotenv.config();

var pool = mysql.createPool({
  host: process.env.DB_HOST || "nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com",
  user: process.env.DB_USER || "candidate",
  password: process.env.DB_PASSWORD || "NoTeDeSt^C10.6?SxwY882}",
  database: process.env.DB_NAME || "conqtvms_dev"
});

pool.getConnection(function(err, connection) {
  if(err){
    console.error('Error connecting to the database : ', err.message)
  }else{
    console.log('Connected to the database')
    connection.release();
  }
  });

module.exports = pool.promise();