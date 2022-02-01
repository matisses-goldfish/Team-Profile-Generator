const inquirer = require('inquirer');
const fs = require('fs');
// const renderLicenseBadge = require('./license')
// Firs things first, I need to create a prompt-based question list in my command line specifically for my 
// Project Manager
// this will generate a starter HTML file that we can then add on 
var managerQuestions = [
    {
        type: 'input',
        message:'Welcome to the Profile generator! Begin my entering a Project Title',
        name: 'projTitle',
    },
    {
        type: 'input',
        message:'Thank you Team Manager! Please enter your name!',
        name: 'managerName',
    },
    {
        type: 'input',
        message:'Please enter your employee ID',
        name: 'managerID',
    },
    {
        type: 'input',
        message:'Please enter an email address!',
        name: 'managerEmail',
    },
    {
      type: 'input',
      message: "Please Enter your Office Number",
      name: 'officeNum',
    },

  ];
inquirer
  .prompt(managerQuestions)
  .then((response) =>{
  console.log(response);
    response.confirm === response.password
      ? console.log('Your reponses have been Sucessfully Loged!')
      : console.log('Please try again :(')
// I need to create my css file with my initial response

    fs.writeFile('index.html', generateHTML(response), (err) =>
  err ? console.log(err) : console.log('Your Team Profile is now ready!') );

  });
   var generateHTML = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">    
        <link rel="stylesheet" href="./style.css">
    
        <title>My Project Team</title>
    
    </head>
    
    <body>
        <div class="col text-center" id="header">
            <h1 id="headerTxt">${data.projTitle}</h1>
        </div>
        <div class="col">
            <div class= "card">
                <div class="card-header" id="cardHeader">
                    <h3>${data.managerName}</h3>
                    <h4> Team Manager <h4>
                </div>
    
                <div class="col" id="infocol">
                    <div class="container" id="info">
                        <p>ID:${data.managerID}</p>
                    </div>
                    <div class="container" id="info">
                        <p>Email: ${data.managerEmail}</p>
                    </div>
                    <div class="container" id="info">
                        <p>Office Number: ${data.officeNum}</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
`
   }
// Reminder: Please create clickable email link
// Then I need to as a true or false question that would either allow them to continue adding infomration or
var continueQuestion = [
    {
        type: 'checkbox',
        message:'Would you like to continue by adding other members of your team?',
        choices: ['Yes!','No Thanks!'],
        name: 'continue',
    },

]
// I need code that would stop the following is they choose no thanks:
// if they continue:
var memberQuestion = [
    {
        type: 'checkbox',
        message:'Which would you like to include?',
        choices:['Engineer','Intern'],
        name: 'teamOpt',
    },
    {
        type: 'input',
        message:'Please enter the members name!',
        name: 'memberName',
    },
    {
        type: 'input',
        message:'Please enter their employee ID',
        name: 'memberID',
    },
    {
        type: 'input',
        message:'Please enter their email address!',
        name: 'memberEmail',
    },
    {
      type: 'input',
      message: "Please Enter their Github Username!",
      name: 'memberGit',
    },
    {
        type: 'checkbox',
        message:'Would you like to continue by adding another member?',
        choices:['Engineer','Intern'],
        name: 'continueQuest',
    },
  ];
inquirer
  .prompt(memberQuestion)
  .then((response) =>{
  console.log(response);
    response.confirm === response.password
      ? console.log('Your reponses have been Sucessfully Loged!')
      : console.log('Please try again :(')

// change write file to append file 
    fs.writeFile('index.html', generateHTML(response), (err) =>
  err ? console.log(err) : console.log('Your profile addition has been added!') );

  });
// I need code that circulates throuhg the questions until the user says they're done
   var generateHTML = (data) => {
    return `
            <div class= "card">
                <div class="card-header" id="cardHeader">
                    <h3>${data.memberName}</h3>
                    <h4> Team Manager <h4>
                </div>
    
                <div class="col" id="infocol">
                    <div class="container" id="info">
                        <p>ID:${data.memberID}</p>
                    </div>
                    <div class="container" id="info">
                        <p>Email: ${data.memberEmail}</p>
                    </div>
                    <div class="container" id="info">
                        <p>Github: ${data.memberGit}</p>
                    </div>
                </div>
            </div>
`
   }
//    make github clickable