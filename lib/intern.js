const team = require('./employee');

class Intern extends team  {
    constructor (name, id, email, school) {
        super (name, id, email); 

        this.school = school; 
    }

    getSchool () {
        return this.school;
    }

    getRoles () {
        return "Intern";
    }
}
module.exports = Intern; 