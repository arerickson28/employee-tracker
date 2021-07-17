const inquirer = require('inquirer');
const { connectableObservableDescriptor } = require('rxjs/internal/observable/ConnectableObservable');
const table = require('console.table') ;
const Hogwarts = require('./db/index.js');
// const { inherits } = require('util');
// const { listenerCount } = require('./db/connection.js');

const connection = require('./db/connection.js');
const { load } = require('dotenv');

const hogDB = new Hogwarts(connection)



function init() {
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
        (res) => {

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
                    console.log("pikachu")
                    loadPrompt()
                    break;

                case "add employees":
                    console.log("pikachu")
                    loadPrompt()
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
                    hogDB.viewAllEmp() ;
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

init();

