'use strict';

const list = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function parseSalary(data) {
  return +data.dataset.salary.slice(1).replace(/,/g, '');
}

function sortList(param) {
  param.sort((a, b) => {
    return parseSalary(b) - parseSalary(a);
  });

  param.forEach((li) => {
    ul.append(li);
  });
}

function getEmployees(param) {
  return param.map((employee) => {
    return {
      name: employee.textContent.trim(''),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(list);
getEmployees(list);

