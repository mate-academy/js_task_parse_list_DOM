'use strict';

class Employee {
  constructor(employeeName, position, salary, age) {
    this.name = employeeName;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }
}

const ul = document.querySelector('ul');
const li = ul.children;

getEmployees(li);
sortList(li);

function sortList(list) {
  [...list]
    .sort(
      (a, b) =>
        convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary),
    )
    .forEach((element) => ul.appendChild(element));
}

function getEmployees(list) {
  const arrayOfEmployees = [...list].map((element) => {
    return new Employee(
      element.textContent.trim(),
      element.dataset.position,
      convertSalary(element.dataset.salary),
      element.dataset.age,
    );
  });

  return arrayOfEmployees;
}

function convertSalary(salary) {
  return Number.parseInt(salary.replace(/\D/g, ''));
}
