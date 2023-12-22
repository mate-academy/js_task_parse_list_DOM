'use strict';

const listElement = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  const sorted = [...list].sort((item1, item2) => {
    return convertSalary(item2.dataset.salary)
    - convertSalary(item1.dataset.salary);
  });

  sorted.forEach(employee => listElement.append(employee));
}

function getEmployees(list) {
  return list.map(item => {
    const { position, salary, age } = item.dataset;

    return {
      name: item.textContent,
      position,
      salary,
      age,
    };
  });
}

function convertSalary(salary) {
  return +salary.slice(1).replaceAll(',', '');
}

sortList(employees);
getEmployees(employees);
