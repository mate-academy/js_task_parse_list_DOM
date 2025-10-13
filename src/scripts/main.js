'use strict';

const listElement = document.querySelector('#employees');

function convertSalary(salaryString) {
  return parseFloat(salaryString.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = list.querySelectorAll('[data-salary]');
  const sortedArray = Array.from(items).sort((a, b) => {
    const salaryA = convertSalary(a.dataset.salary);
    const salaryB = convertSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  sortedArray.forEach((element) => list.appendChild(element));
}

function getEmployees(list) {
  const items = list.querySelectorAll('[data-salary]');

  return Array.from(items).map((employee) => ({
    name: employee.querySelector('.name').textContent.trim(),
    position: employee.dataset.position,
    salary: convertSalary(employee.dataset.salary),
    age: parseInt(employee.dataset.age, 10),
  }));
}

sortList(listElement);

// eslint-disable-next-line no-unused-vars
const employees = getEmployees(listElement);
