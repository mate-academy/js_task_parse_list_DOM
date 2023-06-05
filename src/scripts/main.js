'use strict';

const listOfEmployees = document.querySelectorAll('li');

function getEmployees(list) {
  const employees = [];

  class Employee {
    constructor(name, position, salary, age) {
      this.name = name;
      this.position = position;
      this.salary = salary;
      this.age = age;
    }
  }

  for (let i = 0; i < list.length; i++) {
    const worker = new Employee(
      list[i].innerText,
      list[i].dataset.position,
      convertSalary(list[i].dataset.salary),
      list[i].dataset.age
    );

    employees.push(worker);
  }

  return employees;
}

getEmployees(listOfEmployees);

const arrayOfEmployees = getEmployees(listOfEmployees);

function convertSalary(salary) {
  const salaryAmount = salary.slice(1, salary.length + 1).replace(',', '');

  return Number(salaryAmount);
}

function sortList(list) {
  return list.sort((a, b) => b.salary - a.salary);
}

const sortedList = sortList(arrayOfEmployees);

for (let i = 0; i < listOfEmployees.length; i++) {
  listOfEmployees[i].innerText = sortedList[i].name;
}
