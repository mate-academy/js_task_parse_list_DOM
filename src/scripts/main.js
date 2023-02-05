'use strict';

const ul = document.querySelector('ul');
const employees = [...ul.children];

function sortList(employeesList) {
  employeesList.sort((a, b) => {
    const personA = convertToNumber(a.dataset.salary);
    const personB = convertToNumber(b.dataset.salary);

    return personB - personA;
  });

  ul.append(...employeesList);
}

function convertToNumber(a) {
  return parseInt(a.slice(1).replaceAll(',', ''));
}

sortList(employees);

function getEmployees(employeesList) {
  return employeesList.map(item => ({
    name: item.textContent.trim(),
    ...item.dataset,
  }));
}

getEmployees(employees);
