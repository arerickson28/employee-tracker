// querries here
const connection = require('./connection.js')

class DB {
    constructor (connection) {
        this.connection = connection
    }

    //methods!

    // route to find all emplyees and returns them
    
    findAllEmp() {
        const query = "SELECT * from employee"
        return this.connection.query(
            query, function (err, result, fields) {
                if (err) throw err;
                return result;
            })
    }
    // 
}

module.exports = DB ;