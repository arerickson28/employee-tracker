// querries here
// const connection = require('./connection.js')

class Hogwarts {
    constructor (connection) {
        this.connection = connection
    }

    //methods!

    // route to find all emplyees and returns them
    
    viewAllEmp() {
        const query = "SELECT * FROM employee"
        this.connection.query(query, function (err, result) {
                if (err) throw err;
                return result;
        // return "Avatar the last airbender"
        })
    }

    viewAllDep() {
        const querie = "SELECT * FROM department"
    }

    viewAllRole() {
        const querie = "SELECT * FROM role"
    }

    addDep() {

    }

    addRole() {

    }

    addEmp() {

    }

    updateEmpRole() {

    }

    updateEmpMan() {

    }
    
    viewEmpByMan() {

    }

    delDep() {

    }

    delRole() {

    }

    delEmp() {

    }

    viewBudUseByDep() {

    }
}

module.exports = Hogwarts ;