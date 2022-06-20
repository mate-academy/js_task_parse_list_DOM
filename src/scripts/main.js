'use strict';

const list = document.querySelector('ul');
const employees = [ ...list.children ];

function normalizeSalary(salary) {
  return +salary.replace('$', '').replace(',', '');
}

function sortList(employeesList) {
  const sortedList = employeesList
    .sort((liA, liB) =>
      normalizeSalary(liB.dataset.salary) - normalizeSalary(liA.dataset.salary)
    );

  list.append(...sortedList);
}

function getEmployees(employeesList) {
  return employeesList.map(li => {
    return {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: normalizeSalary(li.dataset.salary),
      age: +li.dataset.age,
    };
  });
}

getEmployees(employees);
sortList(employees);
