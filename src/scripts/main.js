'use strict';

const employees = document.querySelector('ul');

function sortList(listDOM) {
  [...listDOM.children]
    .sort(
      (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
    )
    .forEach((elem) => listDOM.append(elem));
}

function getEmployees(listDOM) {
  return [...listDOM.children].map((elem) => ({
    name: elem.textContent.trim(),
    position: elem.dataset.position,
    salary: parseSalary(elem.dataset.salary),
    age: +elem.dataset.age,
  }));
}

function parseSalary(string) {
  return +string.replace('$', '').replaceAll(',', '');
}

sortList(employees);
getEmployees(employees);
