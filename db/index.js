// querries here
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
                //For loop here 
                console.table(result);
        })
    }

    viewAllDep() {
        const query = "SELECT * FROM department"
        this.connection.query(query, function (err, result) {
            if (err) throw err;
            //For loop here 
            console.table(result);
        })
    }

    viewAllRole() {
        const query = "SELECT * FROM role"
        this.connection.query(query, function (err, result) {
            if (err) throw err;
            //For loop here 
            console.table(result);
        })
    }

    addDep(newDep) {
        const query = `INSERT INTO department (department_name) VALUES ("${newDep}")`
        this.connection.query(query, function (err, result) {
            if (err) throw err;
            //For loop here 
            console.log(`You've added ${newDep} as a new department`);
        })
    }

    addRole(title, salary, dep_name) {

        function getDepID(dep_name) {
            const query = `SELECT id FROM department WHERE department_name = "${dep_name}"`
            this.connection.query(query, function (err, result) {
                if (err) throw err;
                return result
            })
        }


        const query = `INSERT INTO role (title, salary, department_id) VALUES ("${title}", "${salary}", "${getDepID(dep_name)}")`
        this.connection.query(query, function (err, result) {
            if (err) throw err;
            //For loop here 
            console.log(`You've added ${title} as a new role`);
        })
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