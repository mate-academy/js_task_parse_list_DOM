'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((x, y) => {
    const prev = +x.dataset.salary.replace(',', '').replace('$', '');
    const next = +y.dataset.salary.replace(',', '').replace('$', '');

    return next - prev;
  });

  return employeesList.append(...list);
}

function getEmployees(list) {
  return [...list].map(employee => ({
    name: employee.textContent,
    ...employee.dataset,
  }));
}

sortList(employees);
getEmployees(employees);
