'use strict';

const list = document.querySelector('ul');
const employees = document.querySelectorAll('li[data-position]');

// eslint-disable-next-line no-shadow
function sortList(employees) {
  const sortedArray = Array.from(employees).sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[^0-9.-]+/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[^0-9.-]+/g, ''));

    return salaryB - salaryA;
  });

  sortedArray.forEach((node) => list.append(node));
}

// eslint-disable-next-line no-shadow
function getEmployees(employees) {
  const employeeList = [];

  for (const employee of employees) {
    // eslint-disable-next-line no-shadow
    const name = employee.textContent;
    const position = employee.getAttribute('data-position');
    const salary = employee.getAttribute('data-salary');
    const age = employee.getAttribute('data-age');

    employeeList.push({
      name,
      position,
      salary,
      age,
    });
  }

  return employeeList;
}

getEmployees(employees);
sortList(employees);
