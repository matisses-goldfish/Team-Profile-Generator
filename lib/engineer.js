const team = require('./employee');

class Engineer extends team {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    getGithub () {
        return this.github;
    }

    getRoles () {
        return "Engineer";
    }
}

module.exports = Engineer; 