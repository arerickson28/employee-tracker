// querries here
const connection = require('connection.js')

class DB {
    constructor (connection) {
        this.connection = connection ;
    }

    //methods!

    // route to find all emplyees and returns them
    
    findAllEmp() {
        return this.connection.query(
            "SELECT * from TABLE"
        )
    }
    // 
}