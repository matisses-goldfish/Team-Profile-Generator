const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 
const fs = require('fs'); 
const inquirer = require('inquirer');

const generateHtml = require('./src/generateHTML');

const entireTeam = []; 

// welcome prompt
const welcomePrompt = () => {
    return inquirer.prompt ([
        {
            type: 'confirm',
            message: "Welcome to the team profile generate, please begin by pressing enter!",
            name: 'continue',
            default: true
        }
    ])
    // TODO: fix if else statement
    .then( welcomePrompt => {
        switch(welcomePrompt.continue) {
            case true:
                iniatialQuestion();
                break;

        }
    });
    // submit enter and continue to iniatialQuestion
};

// iniatial question
const iniatialQuestion = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            message: "which would you like to enter?",
            choices: ['Manager','Engineer', 'Intern'],
            name: 'role',
        }
    ])
    // jump to which role they choose
    .then(iniatialQuestion => {
        switch(iniatialQuestion.role) {
            case 'Manager':
                newManager();
                break;
            case 'Engineer':
                newEngineer();
                break;
            case 'Intern':
                newIntern();
                break;
        }
    });
};

// create manager
const newManager = () => {
    return inquirer.prompt ([
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
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            },
        },
        {
            type: 'input',
            message: "Please enter your office number",
            name: 'officeNumber',
        },
        {
            type: 'confirm',
            name: 'confirmNewMember',
            message: 'Would you like to add a new team member?',
            defalt: true,
        },
    ])
    .then((managerAnsw) => {
        const  { name, id, email, officeNumber } = managerAnsw; 
        const manager = new Manager (name, id, email, officeNumber);
                
        entireTeam.push(manager);
        console.log(manager); 

        switch(managerAnsw.confirmNewMember) {
            case true:
                iniatialQuestion();
                break;

                default:
                htmlAddition('dist/index.html', generateHtml(entireTeam))

        }
    });
};

// create engineer
const newEngineer = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: "What's their name?",
            name: 'name', 
        },
        {
            type: 'input',
            message: "Please enter their ID?",
            name: 'id',
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
                    console.log ('Please enter an email!')
                    return false; 
                }
            },
        },
        {
            type: 'input',
            message: "Please enter their github username",
            name: 'github',
        },
        {
            type: 'confirm',
            name: 'confirmNewMember',
            message: 'Would you like to add another team member?',
            default: true
        }
    ])
    .then((engineerAnsw) => {
        const  { name, id, email, github } = engineerAnsw; 
        const engineer = new Engineer (name, id, email, github);
        
        entireTeam.push(engineer)
        console.log(engineer); 

        switch(engineerAnsw.confirmNewMember) {
            case true:
                iniatialQuestion();
                break;
                default:
                    htmlAddition('dist/index.html', generateHtml(entireTeam))

        }
    });
};

// create intern
const newIntern = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: "What's their name?",
            name: 'name', 
        },
        {
            type: 'input',
            message: "Please enter their ID?",
            name: 'id',
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
                    console.log ('Please enter an email!')
                    return false; 
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
        },
        {
            type: 'confirm',
            name: 'confirmNewMember',
            message: 'Would you like to add another team member?',
            default: true
        },
    ])
    .then((internAnsw) => {
        const  { name, id, email, school } = internAnsw; 
        const intern = new Intern (name, id, email, school);

        entireTeam.push(intern)
        console.log(intern); 

        switch(internAnsw.confirmNewMember) {
            case true:
                iniatialQuestion();
                break;
            default:
                htmlAddition('dist/index.html', generateHtml(entireTeam))

        }
    });

};

const htmlAddition = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your project team page is now complete. Your new html file should be located within your folder. Come Again!")
        }
    })
}; 

welcomePrompt()