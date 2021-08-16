'use strict';

const employeesList = document.querySelector('ul');

function sortList(list) {
  return [...list.children]
    .sort((a, b) => (
      salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary)
    ));
}

function salaryToNumber(salary) {
  return +salary.slice(1).split(',').join('');
}

const employeesSorted = sortList(employeesList);

employeesSorted.forEach(employee => (
  employeesList.append(employee)
));

function getEmployees(list) {
  return [...list.children]
    .map(employee => ({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    }));
}

getEmployees(employeesList);
