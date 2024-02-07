const Employees = require('./Employees');

class SalesPerson extends Employees{
    #totalSales

    constructor(name, title, salary, isHired, clients) {
        super(name, title, salary, isHired);

        this.clients = clients;
        this.#totalSales = 0;
    }
    getSalesNumbers() {
        return this.#totalSales; 
    }
    makeSale(amount) {
        this.#totalSales += amount;
        return this.#totalSales;
    }
    findClient(client) {
        let foundClient = null;

        this.clients.forEach(cl => {
            if (cl === client) {
                foundClient = cl;
            }
        });
        return foundClient;
    }
};

module.exports = {
    SalesPerson,
}