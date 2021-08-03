const { connectableObservableDescriptor } = require('rxjs/internal/observable/ConnectableObservable');
const util = require('util');

// querries here

class Hogwarts {
    constructor (connection) {
        this.connection = connection
    }
    
    async viewAllEmp() {
        const query = "SELECT * FROM employee"
        // this.connection.query(query, function (err, result) {
        //         if (err) throw err;
        //         //For loop here 
        //         const resultz = result
        //         // console.log(resultz);
        //         return resultz
        // })
        let [ans, fields] = await this.connection.execute(query);
        console.table(ans);
    }

    async viewAllDep() {
        const query = "SELECT * FROM department"
        // this.connection.query(query, function (err, result) {
        //     if (err) throw err;
        //     //For loop here 
        //     console.table(result);
        // })
        let [ans, fields] = await this.connection.execute(query)
        console.table(ans);
    }


    async getAllDep() {
        const query = "SELECT * FROM department;"

        //let f = await this.connection;

        let [ans, fields] = await this.connection.execute(query);
        //let ans = await this.connection.execute(query);//, function (err, result) {
            // if (err) throw err;
            // //console.log(result)
            //    return result
        //     result.map((response) => {
        //         return {
        //             name: response.department_name,
        //             value: response.id,
        //         }
        //     })
        //})

        let ansArr = ans.map(a => {
            return {
                name: a.department_name,
                value: a.id
            }
        });

        return ansArr;
    }

    async getAllRoles() {
        const query = "SELECT * FROM role"
        let [ans, fields] = await this.connection.execute(query)

        let ansArr = ans.map(a => {
            return {
                name: a.title,
                value: a.id
            }
        });
        return ansArr
    }

    async viewAllRole() {
        const query = "SELECT * FROM role"

        //let db = await this.connection;

        let [ans, fields] = await this.connection.execute(query);
        // this.connection.query(query, function (err, result) {
        //     if (err) throw err;
        //     //For loop here 
        //     console.table(result);
        
        // })
        
        console.table(ans);
    }

    addDep(newDep) {
        const query = `INSERT INTO department (department_name) VALUES ("${newDep}")`
        this.connection.query(query, function (err, result) {
            if (err) throw err;
            //For loop here 
            console.log(`You've added ${newDep} as a new department`);
        })
    }

    async addRole(title, salary, department_id) {

        // function getDepID(dep_name) {
        //     const query = `SELECT id FROM department WHERE department_name = "${dep_name}"`
        //     this.connection.query(query, function (err, result) {
        //         if (err) throw err;
        //         return result
        //     })
        // }

        //let db = await this.connection;
        const query = `INSERT INTO role (title, salary, department_id) VALUES ("${title}", "${salary}", "${department_id}")`
        await this.connection.execute(query);
        console.log(`You've added ${title} as a new role`);
    }

    async addEmp(fist_name, last_name, role_id) {
        const query = `INSERT INTO employee (first_name, last_name, role_id) VALUES ("${fist_name}", "${last_name}", "${role_id}")`
        await this.connection.execute(query)
        // console.log(`You've added ${fist_name} ${last_name} as a new employee`)

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