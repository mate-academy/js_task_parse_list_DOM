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

sortList(li);
getEmployees(li);

function sortList(list) {
  [...list]
    .sort(
      (a, b) =>
        convertNumber(b.dataset.salary) - convertNumber(a.dataset.salary),
    )
    .forEach((element) => ul.appendChild(element));
}

function getEmployees(list) {
  const arrayOfEmployees = [...list].map((element) => {
    return new Employee(
      element.textContent.trim(),
      element.dataset.position,
      convertNumber(element.dataset.salary),
      convertNumber(element.dataset.age),
    );
  });

  return arrayOfEmployees;
}

function convertNumber(number) {
  return Number.parseInt(number.replace(/\D/g, ''));
}
