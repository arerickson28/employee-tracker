const { setupMaster } = require('cluster');
const mysql = require('mysql2/promise') ;
const util = require('util')
require("dotenv").config();
// 
// to use anyc await instead of callbacks

async function setup() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DATABASE,
        port: 3306
    });

    return connection;
}


// connection.connect((err) => {
//     if (err) throw err ;
//     console.log("You have connected") ;
// })
//write connection
//callbacks vs promises
//util 

module.exports = setup()