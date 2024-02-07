class Employees {
  static #allEmployees = [];

  #salary;
  #isHired;
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#isHired = true;
    Employees.#allEmployees.push(this);
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    return (this.#salary = amount);
  }

  getStatus() {
    return this.#isHired;
  }

  static getEmployees() {
    return Employees.#allEmployees;
  }

  static getTotalPayroll() {
    let totalPayroll = 0;
    for (let i = 0; i < Employees.#allEmployees.length; i++) {
      totalPayroll += Employees.#allEmployees[i].getSalary();
    }
    return totalPayroll;
  }

  setStatus(command) {
    if (command === "hire") {
      this.#isHired = true;
    } else if (command === "fire") {
      this.#isHired = false;
    }
  }
}

module.exports = {
  Employees,
};
