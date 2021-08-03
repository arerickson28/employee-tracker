const inquirer = require('inquirer');
const { connectableObservableDescriptor } = require('rxjs/internal/observable/ConnectableObservable');
const table = require('console.table') ;
const Hogwarts = require('./db/index.js');
// const { inherits } = require('util');
// const { listenerCount } = require('./db/connection.js');

const connection = require('./db/connection.js');
const { load } = require('dotenv');

let hogDB



async function init() {
    let pdb = await connection;
    hogDB = new Hogwarts(pdb)

    const logo = require('asciiart-logo');
    const config = require('./package.json');
    console.log(logo(config).render());
    // call function to load prompts
    loadPrompt();

    
    //
}

function loadPrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "what do you want to do?",
            choices: ["add departments", "add roles", "add employees", "view departments", "view roles", "view employees", "update employee roles", "update employee mangers", "view employees by manager", "delete departments", "delete roles", "delete employees", "view budget utilization by department", "EXIT EMPLOYEE TRACKER"],
            name: "my_query"
        }
    ]).then(
        //switch statement to return the methods based on what they want to do
        async (res) => {

            switch (res.my_query) {
                
                case "add departments":
                    inquirer.prompt([
                        {
                            type: "input",
                            message: "Enter name of new department",
                            name: "newDep"
                        }
                    ]).then(
                        async (res) => {
                            console.log(res.newDep)
                            await hogDB.addDep(res.newDep)
                            loadPrompt()
                        }
                    )
                    break;

                case "add roles":
                    // testaddrole();
                    let departmentChoices = await hogDB.getAllDep();
                    // console.log("What we got back: ", departmentChoices);
                    inquirer.prompt([
                        {
                            type: "input",
                            message: "What is the title of this role?",
                            name: "roleTitle"
                        },
                        {
                            type: "input",
                            message: "What is the salary for this role?",
                            name: "roleSalary"
                        },
                        {
                            type: "list",
                            message: "For which department would you like to add this role?",
                            choices: departmentChoices,
                            name: "roleDep"
                        }
                    ]).then( async data => {
                        await hogDB.addRole(data.roleTitle, data.roleSalary, data.roleDep)
                        // console.log(`You've added ${data.roleTitle} as a new roleee!`)
                        loadPrompt()
                    })
                
                    
                    break;

                case "add employees":
                    let roleChoices = await hogDB.getAllRoles();

                    inquirer.prompt([
                        {
                            type: "input",
                            message: "What is the first name of this employee?",
                            name: "empFirst"
                        },
                        {
                            type: "input",
                            message: "What is the last name of this employee?",
                            name: "empLast"
                        },
                        {
                            type: "list",
                            message: "For which role would you like to add this employee?",
                            choices: roleChoices,
                            name: "empRole"
                        }
                    ]).then( async data => {
                        await hogDB.addEmp(data.empFirst, data.empLast, data.empRole)
                        console.log(`You've added ${data.empFirst} ${data.empLast} as a new employee!`)
                        loadPrompt()
                    })
                    
                    
                    break;
                    
                case "view departments":
                    await hogDB.viewAllDep();
                    loadPrompt()
                  
                    break;

                case "view roles":
                    await hogDB.viewAllRole();
                    loadPrompt()
                    break;

                case "view employees":
                    await hogDB.viewAllEmp();
                    loadPrompt();
                    break;

                case "update employee roles":
                    let empChoices = await hogDB.getAllEmp()
                    let roleChoicez = await hogDB.getAllRoles()

                    inquirer.prompt([
                        {
                            type: "list",
                            message: "For which employee would you like update a role?",
                            choices: empChoices,
                            name: "empChoice"
                        },
                        {
                            type: "list",
                            message: "Which role would you like to assign this employee?",
                            choices: roleChoicez,
                            name: "empRole"
                        }
                    ]).then(async data => {
                        await hogDB.updateEmpRole(data.empRole, data.empChoice)
                        console.log(`You've assigned ${data.empChoice} the role of ${data.empRole}`)
                        loadPrompt()
                    })

                    break;
    
                case "update employee managers":
                    console.log("pikachu")
                    loadPrompt()
                    break;
                
                case "view employees by manager":
                    console.log("pikachu")
                    loadPrompt()
                    break;
                        
                case "delete departments":
                    console.log("pikachu")
                    loadPrompt()
                    break;
    
                case "delete roles":
                    let roleOptions = await hogDB.getAllRoles();

                    inquirer.prompt([
                        {
                            type: "list",
                            message: "Which role would you like to delte??",
                            choices: roleOptions,
                            name: "delRole"
                        }
                    ]).then(async data => {
                        await hogDB.delRole(data.delRole)
                        loadPrompt()
                    })
                    
                    break;
    
                case "delete employees":
                    console.log("pikachu");
                    loadPrompt()
                    break;

                case "view budget utilization by department":
                    console.log("whoohoo")
                    loadPrompt()
                    break;

                case "EXIT EMPLOYEE TRACKER":
                    connection.end();
            }
        } 
    ) 
}

init();
