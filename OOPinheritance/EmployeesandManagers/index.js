class Perosn{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}

class Employee extends Perosn{
    constructor(name, surname, job, salary){
        super(name, surname);
        this.job = job;
        this.salary = salary;

    }
    getData(){
        return this.name + "" + this.surname + "" + this.salary;
    }
    getSalary(){
        return this.salary;
    }
    increaseSalary(){
        this.salary = this.salary + this.salary * 0.1;
    }
}
class Developer extends Emloyee{
    constructor(name, surname, job, salary, specioalization){
        super(name, surname, job, salary);
        this.specioalization = specioalization;
    }
    getSpecialization(){
        return this.specioalization;
    }
    
}
class Manager extends Employee{
    constructor(name, surname, job, salary){
        super(name, surname, job, slalry);
        this.department = department;
    }
    getDepartment(){
        return this.department;
    }
    changeDepartment(nexDep){
        this.department = newDep;
    }
}
var manager = new Manager ("ana", "rancic")