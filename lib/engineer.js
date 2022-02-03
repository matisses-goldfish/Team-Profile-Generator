const team = require('./team');

class Engineer extends team {
    constructor (name, id, email, githubProfile) {
        super (name, id, email);

        this.githubProfile = githubProfile; 
    }

    getGithub () {
        return this.githubProfile;
    }

    getPosition () {
        return "Engineer";
    }
}

module.exports = Engineer; 