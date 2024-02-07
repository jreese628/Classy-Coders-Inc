const { Employees } = require('./Employees');

class SoftwareEngineer extends Employees{
    #programmingLanguages;

    //Test Bug: Index test fails because it expects these variables not empty array 
    testVariables = ["JavaScript", "Java", "Python"];

    constructor(name, title, salary, isHired) {
        super(name, title, salary, isHired);

        this.#programmingLanguages = this.testVariables;
    }
    getProgrammingLanguages() {
        return this.#programmingLanguages;
    }
    setProgrammingLanguages(language) {
        this.#programmingLanguages.push(language);
        return this.#programmingLanguages;
    }
};

module.exports = {
    SoftwareEngineer,
}