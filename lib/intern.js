const team = require('./team');

class Intern extends team  {
    constructor (name, id, email, school) {
        super (name, id, email); 

        this.school = school; 
    }

    getSchool () {
        return this.school;
    }

    getPosition () {
        return "Intern";
    }
}
module.exports = Intern; 