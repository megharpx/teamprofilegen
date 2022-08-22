const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const renderPage = require("../src/template.js")

class Team {
    constructor() {
        this.member = [];
    }

    async initializeTeam() {
        await this.addManager();
        await this.makeChoice();
    }

    async addManager() {
        await inquirer
            .prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `What is the Team Manager's name? `,
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `What is the Team Manager's ID? `,
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the Team Manager's email? `,
                },
                {
                    type: `input`,
                    name: `officeNumber`,
                    message: `What is the Team Manager's office number? `,
                }
            ])

            .then((managerObject) => {
                this.member.push(new Manager(managerObject));
                
            });
    }
    async makeChoice() {
        await inquirer.prompt({
            type: `list`,
            name: `choice`,
            message: `What would you like to do now?`,
            choices: [`Add Engineer`, `Add Intern`, `Finish Building`],
        })
            .then(async ({ choice }) => { 
                console.log(choice)
                if (choice === 'Finish Building') {
                    console.log('Wrapping things up...')
                    this.buildTeam(this.member)
                    return 
                } else {
                    await this.addEmployee(choice)
                    this.makeChoice()
                }
            })
    }

    async addEmployee(passedChoice) { 
        if (passedChoice === 'Add Engineer') {
            await this.addEngineer()
        } else { 
            await this.addIntern()
        }
        console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - -`)
    }

    async addEngineer() {
        console.log('Adding Engineer!')
        await inquirer
            .prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `What is the Engineer's name? `,
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `What is the Engineer's ID? `,
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the Engineer's email? `,
                },
                {
                    type: `input`,
                    name: `github`,
                    message: `What is the Engineer's github? `,
                },
            ])
            .then((engineerObject) => {
                this.member.push(new Engineer(engineerObject));
            });
        console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - -`)
    }

    async addIntern() {
        console.log('Adding Intern!')
        await inquirer
            .prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `What is the Intern's name? `,
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `What is the Intern's ID? `,
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the Intern's email? `,
                },
                {
                    type: `input`,
                    name: `school`,
                    message: `What is the Intern's school? `,
                },
            ])
            .then((internObject) => {
                this.member.push(new Intern(internObject));
            });
        console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - -`)
    }

    async buildTeam(passedArray) {
        console.log(`Building Team!`)
        console.log(passedArray)
        console.log(`- - - - - - - - - - - - - - - - - - - - - - - - - - - - -`)
        renderPage(passedArray) 
    }
}

module.exports = Team;