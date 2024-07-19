'use strict';

const ul = document.querySelector('ul');
const liElement = [...document.querySelectorAll('li')];

function parseSalary(salaryStr) {
  return +salaryStr.slice(1).split(',').join('');
}

function sortEmployeesBySalary(list) {
  list.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );
  ul.append(...list);
}

function employeeList(list) {
  return list.map((li) => ({
    name: li.innerText,
    ...li.dataset,
  }));
}

sortEmployeesBySalary(liElement);
employeeList(liElement);
