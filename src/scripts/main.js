'use strict';

const list = document.querySelector('ul');

function toNumber(input) {
  return +input.slice(1).replace(',', '');
};

function sortList(listFromHTML) {
  [...listFromHTML.children]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach(child => list.append(child));

  return list;
}

function getEmployees(listOfEmployees) {
  const employees = [];

  [...listOfEmployees.children].forEach(employee =>
    employees.push({
      name: employee.innerText,
      position: employee.dataset.position,
      age: employee.dataset.age,
      salary: employee.dataset.salary,
    }));

  return employees;
}

sortList(list);
getEmployees(list);
