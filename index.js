const inquirer = require('inquirer');
const { connectableObservableDescriptor } = require('rxjs/internal/observable/ConnectableObservable');
// const table = require('console.table') ;
// const db = require('./db');
// const { inherits } = require('util');
// const { listenerCount } = require('./db/connection');


function init() {
    console.log("logo text in gif is it a requirement?")
    // call function to load prompts

    const logo = require('asciiart-logo');
    //
}

function loadPrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "what do you want to do?",
            choices: ["add departments", "add roles", "add employees", "view deparments", "view roles", "view employees", "update employee roles", "update employee mangers", "view employees by manager", "delete departments", "delete roles", "delete employees", "view budget utilization by department"],
            name: "my_query"
        }
    ]).then(
        //switch statement to return the methods based on what they want to do
        (res) => {

            switch (res.my_query) {
                
                case "add departments":
                    console.log("pikachu")
                    break;

                case "add roles":
                    console.log("pikachu")
                    break;

                case "add employees":
                    console.log("pikachu")
                    break;
                    
                case "view departments":
                    console.log("pikachu")
                    break;

                case "view roles":
                    console.log("pikachu")
                    break;

                case "view employees":
                    console.log("pikachu")
                    break;

                case "update employee roles":
                    console.log("pikachu")
                    break;
    
                case "update employee managers":
                    console.log("pikachu")
                    break;
                
                case "view employees by manager":
                    console.log("pikachu")
                    break;
                        
                case "delete departments":
                    console.log("pikachu")
                    break;
    
                case "delete roles":
                    console.log("pikachu")
                    break;
    
                case "delete employees":
                    console.log("pikachu");                      break;

                case "view budget utilization by department":
                    console.log("whoohoo")
                    break
            }

         
        }
        
    )
    
}

loadPrompt();

