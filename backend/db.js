const mysql = require("mysql2/promise");
require("dotenv").config(); 

const pool = mysql.createPool({
    host: process.env.DB_HOST,
})