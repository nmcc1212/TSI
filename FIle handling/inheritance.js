// class human has properties age and name
class Human {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// class trainer inherits from class human
class Trainer extends Human {
  constructor(age, name, subject) {
    super(age, name);
    this.subject = subject;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Subject: ${this.subject}`);
  }

  conductTraining() {
    console.log(
      `${this.name} is conducting a training session on ${this.subject}.`,
    );
  }
}

// class consultant inherits from class human
class Consultant extends Human {
  constructor(age, name, company) {
    super(age, name);
    this.company = company;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Company: ${this.company}`);
  }

  provideConsultation() {
    console.log(`${this.name} is providing consultation for ${this.company}.`);
  }
}

// Example usage:
const trainer1 = new Trainer(30, "John Doe", "JavaScript");
trainer1.displayInfo();
trainer1.conductTraining();

const consultant1 = new Consultant(35, "Jane Smith", "ABC Consulting");
consultant1.displayInfo();
consultant1.provideConsultation();
