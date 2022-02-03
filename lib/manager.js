const team = require('./team');

class Manager extends team {
    constructor (name, id, email, number) {
        super (name, id, email); 
        
        this.number = number; 
    }

    getPosition () {
        return "Manager";
    }
}

module.exports = Manager; 