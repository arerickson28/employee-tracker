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
                        (res) => {
                            console.log(res.newDep)
                            hogDB.addDep(res.newDep)
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
                    ]).then( data => {
                        hogDB.addRole(data.roleTitle, data.roleSalary, data.roleDep)
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
                    ]).then( data => {
                        hogDB.addEmp(data.empFirst, data.empLast, data.empRole)
                        console.log(`You've added ${data.empFirst} ${data.empLast} as a new employee!`)
                        loadPrompt()
                    })
                    
                    
                    break;
                    
                case "view departments":
                    hogDB.viewAllDep();
                    loadPrompt()
                  
                    break;

                case "view roles":
                    hogDB.viewAllRole();
                    loadPrompt()
                    break;

                case "view employees":
                    hogDB.viewAllEmp();
                    loadPrompt();
                    break;

                case "update employee roles":
                    console.log("pikachu")
                    loadPrompt()
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
                    console.log("pikachu")
                    loadPrompt()
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

// function testaddrole() {
//     connection.query('SELECT * FROM department;', (err, res) => {
//         if (err) throw err;

//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "What is the title of this role?",
//                 name: "roleTitle"
//             },
//             {
//                 type: "input",
//                 message: "What is the salary for this role?",
//                 name: "roleSalary"
//             },
//             {
//                 type: "list",
//                 message: "For which department would you like to add this role?",
//                 choices: res.map((response) => {
//                         return {
//                             name: response.department_name,
//                             value: response.id,
//                         }
//                     }),
//                 name: "roleDep"
//             }
//         ]).then( data => {
//             hogDB.addRole(data.roleTitle, data.roleSalary, data.roleDep)
//             // loadPrompt()
//     })

// })

// }

init();
// console.log(hogDB.getAllDep());
// hogDB.getAllDep();