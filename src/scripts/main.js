'use strict';

const list = document.querySelector('ul');

function toNumber(input) {
  return +input.slice(1).replace(',', '');
};

function sortList(listFromHTML) {
  [...listFromHTML.children]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach(child => listFromHTML.append(child));

  return listFromHTML;
}

function getEmployees(listOfEmployees) {
  const employees = [];

  [...listOfEmployees.children].forEach(employee =>
    employees.push({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    }));

  return employees;
}

sortList(list);
getEmployees(list);
