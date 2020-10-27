'use strict';

const employeesList = document.querySelector('ul');

function sortList(list) {
  employeesList.append(...[...list.children]
    .sort((a, b) => {
      return Number.parseInt(b.dataset.salary.replace(/\D/g, ''))
        - Number.parseInt(a.dataset.salary.replace(/\D/g, ''));
    }));
}

function getEmployees(list) {
  return [...list.children].map((employee) =>
    ({
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    }));
}

sortList(employeesList);
getEmployees(employeesList);
