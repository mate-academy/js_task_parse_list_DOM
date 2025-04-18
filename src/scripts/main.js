'use strict';

function parseSalary(salary) {
  return +salary.replace(/[^0-9.-]+/g, '');
}

const listElement = document.querySelector('ul');
const employees = [...listElement.querySelectorAll('[data-salary]')];

function sortList(listItems) {
  listItems.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  listElement.innerHTML = '';
  listItems.forEach((item) => listElement.appendChild(item));
}

function getEmployees(listItems) {
  return listItems.map((el) => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
