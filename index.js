// source: https://github.com/nicolewallace09/team-profile-generator
const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 

const fs = require('fs'); 
const inquirer = require('inquirer');

const teamArray = []; 

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: 'Hello! Welcome to the team profile generator! Please enter your project title to begin', 
            name: 'projectTitle',
        },
        {
            type: 'input',
            message: 'Please enter your name', 
            name: 'name',
        },
        {
            type: 'input',
            message: "Please enter your ID",
            name: 'id',
        },
        {
            type: 'input',
            message: "Please enter your email",
            name: 'email',
        },
        {
            type: 'input',
            message: "Please enter your office number",
            name: 'number',

        }
    ])
    .then(managerInput => {
        const  { name, id, email, number } = managerInput; 
        const manager = new Manager (name, id, email, number);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const addMember = () => {
    console.log(`
    Your input has been successfully logged
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            message: "which would you like to enter next?",
            choices: ['Engineer', 'Intern'],
            name: 'role',
        },
        {
            type: 'input',
            message: "What's their name?",
            name: 'name', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a vaild name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            message: "Please enter their ID?",
            name: 'id',
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter a valid ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter their email address",
            name: 'email',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email address')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            message: "Please enter their github username",
            name: 'githubProfile',
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter a vaild github username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(teamData => {

        let { name, id, email, role, githubProfile, school, confirmAddMember } = teamData; 
        let member; 

        if (role === "Engineer") {
            member = new Engineer (name, id, email, githubProfile);

            console.log(member);

        } else if (role === "Intern") {
            member = new Intern (name, id, email, school);

            console.log(member);
        }

        teamArray.push(member); 

        if (confirmAddMember) {
            return addMember(teamArray); 
        } else {
            return teamArray;
        }
    })

};


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team page has been successfully generated! Check your folder for a new html file!")
        }
    })
}; 

addManager()
  .then(addMember)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });