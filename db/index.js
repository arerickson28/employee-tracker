const { connectableObservableDescriptor } = require('rxjs/internal/observable/ConnectableObservable');
const util = require('util');


class Hogwarts {
    constructor (connection) {
        this.connection = connection
    }
    
    async viewAllEmp() {
        const query = "SELECT * FROM employee;"
       
        let [ans, fields] = await this.connection.execute(query);
        console.table(ans);
    }

    async viewAllDep() {
        const query = "SELECT * FROM department;"

        let [ans, fields] = await this.connection.execute(query)
        console.table(ans);
    }


    async getAllDep() {
        const query = "SELECT * FROM department;"

        let [ans, fields] = await this.connection.execute(query);

        let ansArr = ans.map(a => {
            return {
                name: a.department_name,
                value: a.id
            }
        });

        return ansArr;
    }

    async getAllRoles() {
        const query = "SELECT * FROM role;"
        let [ans, fields] = await this.connection.execute(query)

        let ansArr = ans.map(a => {
            return {
                name: a.title,
                value: a.id
            }
        });
        return ansArr
    }

    async getAllEmp() {
        const query = "SELECT id, CONCAT(first_name, ' ', last_name) AS name FROM employee;"
        let [ans, fields] = await this.connection.execute(query)

        let ansArr = ans.map(a => {
            return {
                name: a.name,
                value: a.id
            }
        });
        return ansArr
    }

    async viewAllRole() {

        const query = "SELECT * FROM role;"

        let [ans, fields] = await this.connection.execute(query);
    
        console.table(ans);
    }

    async addDep(newDep) {
        const query = `INSERT INTO department (department_name) VALUES ("${newDep}");`
        
        await this.connection.execute(query)
    
        console.log(`You've added ${newDep} as a new department`);
    }

    async addRole(title, salary, department_id) {

        const query = `INSERT INTO role (title, salary, department_id) VALUES ("${title}", "${salary}", "${department_id}");`
        await this.connection.execute(query);
        console.log(`You've added ${title} as a new role`);
    }

    async addEmp(fist_name, last_name, role_id) {
        const query = `INSERT INTO employee (first_name, last_name, role_id) VALUES ("${fist_name}", "${last_name}", "${role_id}");`
        await this.connection.execute(query)
        // console.log(`You've added ${fist_name} ${last_name} as a new employee`)

    }

    async updateEmpRole(newRole, employeeId) {
        const query = `UPDATE employee SET role_id = ${newRole} WHERE id = ${employeeId};`
        await this.connection.execute(query)
    }

    async updateEmpMan(newManager, employeeId) {
        const query = `UPDATE employee SET manager_id = ${newManager} WHERE id = ${employeeId};`
        await this.connection.execute(query)
    }
    
    viewEmpByMan() {

    }

    async delDep(depId) {
        const query = `DELETE FROM department WHERE id = ${depId};`
        await this.connection.execute(query)
    }

    async delRole(roleId) {
        const query = `DELETE FROM role WHERE id = ${roleId};`
        await this.connection.execute(query)
    }

    async delEmp(empId) {
        const query = `DELETE FROM employee WHERE id = ${empId};`
        await this.connection.execute(query)
    }

    viewBudUseByDep() {

    }
}

module.exports = Hogwarts ;