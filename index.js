const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js");

teamArray = [];

function runApp () {
    function createTeam () {
        inquirer.prompt ([{
            type: "List",
            message: "What type of employee would you like to add to your team?",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
        }]).then(function (userInput) {
            switch(userInput.addEmployeePrompt) {
               case "Manager":
                addManager();
                break;
               case "Engineer":
                addEngineer();
                break;
               case "Intern":
                addIntern();
                break;

               default:
                htmlBuilder();
            }
        })
    }
}
//OOP function
function addManager() {
    inquirer.prompt ([

        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"    
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager employee ID number?"        
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "what is the manager's office number?"
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee ID number?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's Github username?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
    });

}
function addIntern() {
    inquirer.prompt([

        {
            type: "input",
            name: "InternName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's employee ID number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        createTeam();
    });

}

// return to menu with option to add other team members and create team

function htmlBuilder () {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
}

createTeam();

runApp();