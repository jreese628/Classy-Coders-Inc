const Employees = require('./Employees');

class SoftwareEngineer extends Employees{
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