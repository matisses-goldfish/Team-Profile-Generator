
generateHtml = (entireTeam) => {

    teamCards = []; 

    // cycles through all user data inputed in the command line
    for (let i = 0; i < entireTeam.length; i++) {

        const teamMember = entireTeam[i];

        // TODO: console returns getRole() as not a function
        switch (teamMember.getRole()) {
            case 'Manager':
                const manager = createManager(teamMember);
                teamCards.push(manager);

                break;

              case 'Engineer':
                const engineer = createEngineer(teamMember);
                teamCards.push(engineer);

                break;

              case 'Intern':
                const intern = createIntern(teamMember);
                teamCards.push(intern);

                break;

        }

        
    }

    const memberCard = teamCards.join('')
    
    const createNewTeam = createTeamSite(memberCard); 
    return createNewTeam;

}


const createManager = function (manager) {
    return `
    <div class= "card">
        <div class="card-header" id="cardHeader">
            <h3>${manager.name}</h3>
            <h4> Team Manager <h4>
        </div>

        <div class="col" id="infocol">
            <div class="container" id="info">
                <p>ID:${manager.id}</p>
            </div>
            <div class="container" id="info">
                <p>Email:<a href="mailto:${manager.email}">${manager.email}</a></p>
            </div>
            <div class="container" id="info">
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const createEngineer = function (engineer) {
    return `
    <div class= "card">
        <div class="card-header" id="cardHeader">
            <h3>${engineer.name}</h3>
            <h4> Engineer <h4>
        </div>

        <div class="col" id="infocol">
            <div class="container" id="info">
                <p>ID:${engineer.id}</p>
            </div>
            <div class="container" id="info">
                <p>Email:<a href="mailto:${engineer.email}">${engineer.email}</a></p>
            </div>
            <div class="container" id="info">
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create Intern card 
const createIntern = function (intern) {
    return `
    <div class= "card">
        <div class="card-header" id="cardHeader">
            <h3>${intern.name}</h3>
            <h4> Intern <h4>
        </div>

        <div class="col" id="infocol">
            <div class="container" id="info">
                <p>ID:${intern.id}</p>
            </div>
            <div class="container" id="info">
                <p>Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            </div>
            <div class="container" id="info">
            <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
};


// generate html page 
const createTeamSite = function (memberCard) {   
  return`
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
            <h1 id="headerTxt">Project Workspace</h1>
        </div>
        <div class="col">
            <div class="row">
            ${memberCard}
            </div>
        </div>
    </body>
</html>
`;
}

// export to index
module.exports = generateHtml; 