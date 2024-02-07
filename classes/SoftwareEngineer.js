const Employee = require('./Employees');

class SoftwareEngineer extends Employee{
    #programmingLanguages;

    constructor(name, title, salary, isHired, programmingLanguages) {
        super(name, title, salary, isHired);

        this.#programmingLanguages = programmingLanguages
    }
    getProgrammingLanguages() {
        return this.#programmingLanguages;
    }
    setProgrammingLanguages(language) {
        this.#programmingLanguages = language;
        return this.#programmingLanguages;
    }
}

module.exports = {
    SoftwareEngineer,
}