// Create the parent class Human, and the sub classes Trainer and Consultant implementing the properties from Human and adding their own implementations.


// class human has properties age and name
class Human {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
}

// class trainer inherits from class human
class Trainer extends Human {
    constructor(age, name, subject) {
        super(age, name);
        this.subject = subject;
    }
}

// class consultant inherits from class human
class Consultant extends Human {
    constructor(age, name, company) {
        super(age, name);
        this.company = company;
    }
}