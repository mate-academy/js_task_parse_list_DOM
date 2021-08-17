'use strict';

const employeesList = document.querySelector('ul');
const employeesListChildren = employeesList.children;

employeesList.append(...sortList(employeesListChildren));

getEmployees(employeesListChildren);

function sortList(list) {
  return [...list].sort((first, second) => (
    toNumber(second.dataset.salary) - toNumber(first.dataset.salary)
  ));
}

function toNumber(number) {
  return +number.replace('$', '').split(',').join('');
}

function getEmployees(list) {
  return [...list].map(item => {
    const { position, salary, age } = item.dataset;

    return ({
      name: item.textContent.trim(),
      position,
      salary,
      age,
    });
  });
}
