// employees
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 

// packages
const fs = require('fs'); 
const inquirer = require('inquirer');

// generate html file
const generateHtml = require('./src/generateHTML');

// all userdata will be placed within this array and transfered to our generatehtml file
const entireTeam = []; 

// welcome prompt
const welcomePrompt = () => {
    inquirer.prompt ([
        {
            type: 'confirm',
            message: "Welcome to the Team Profile Generate, please begin by pressing enter!",
            name: 'continue',
            default: true
        }
    ])
    .then((welcomePrompt) => {
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
    inquirer.prompt ([
        {
            type: 'list',
            message: "which would you like to enter?",
            choices: ['Manager','Engineer', 'Intern'],
            name: 'role',
        }
    ])
    // jump to which role they choose
    .then((iniatialQuestion) => {
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

// creates manager
const newManager = () => {
    inquirer.prompt ([
        {
            type: 'input',
            message: 'Manager: Please enter your name', 
            name: 'name',
        },
        {
            type: 'input',
            message: "Manager: Please enter your ID",
            name: 'id',
        },
        {
            type: 'input',
            message: "Manager: Please enter your email",
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
            message: "Manager: Please enter your office number",
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

// creates engineer
const newEngineer = () => {
    inquirer.prompt ([
        {
            type: 'input',
            message: "Engineer: What's their name?",
            name: 'name', 
        },
        {
            type: 'input',
            message: "Engineer: Please enter their ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "Engineer: Please enter their email address",
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
            message: "Engineer: Please enter their github username",
            name: 'github',
        },
        {
            type: 'confirm',
            name: 'confirmNewMember',
            message: 'Engineer: Would you like to add another team member?',
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

// creates intern
const newIntern = () => {
    inquirer.prompt ([
        {
            type: 'input',
            message: "Intern: What's their name?",
            name: 'name', 
        },
        {
            type: 'input',
            message: "Intern: Please enter their ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "Intern: Please enter their email address",
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
            message: "Intern: Please enter their school",
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

// writes the code and deposits it in the dist folder
// const htmlAddition = data => {
//     fs.writeFile('./dist/index.html', data, err => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log("Your project team page is now complete. Your new html file should be located within your folder. Come Again!")
//         }
//     })
// }; 

function htmlAddition(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) {
            console.log(err)
            return;
        } else {
            console.log("Your project team page is now complete. Your new html file should be located within your folder. Come Again!")
        }
    });
};

// begins the prompts in the integrated terimal 
welcomePrompt();