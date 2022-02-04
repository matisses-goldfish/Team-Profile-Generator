const team = require('./employee');

class Manager extends team {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    getRoles () {
        return "Manager";
    }
}

module.exports = Manager; 