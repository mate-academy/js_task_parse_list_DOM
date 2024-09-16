'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = [...document.querySelectorAll('ul > li')];

const covertSalaryToNumber = (salary) =>
  +salary.dataset.salary.slice(1).replaceAll(',', '');

const sortList = function (list) {
  list
    .sort((s1, s2) => {
      const salary1 = covertSalaryToNumber(s1);
      const salary2 = covertSalaryToNumber(s2);

      return salary2 - salary1;
    })
    .forEach((em) => {
      listOfEmployees.append(em);
    });
};

sortList(employees);

class Employee {
  constructor(fullName, position, salary, age) {
    this.fullName = fullName;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

const getEmployees = function (list) {
  return list.map((employee) => {
    const fullName = employee.textContent.trim();
    const position = employee.dataset.position;
    const salary = employee.dataset.salary;
    const age = +employee.dataset.age;

    return new Employee(fullName, position, salary, age);
  });
};

getEmployees(employees);
