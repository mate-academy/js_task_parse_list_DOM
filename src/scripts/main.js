'use strict';

// write code here

const listOfEmployees = document.querySelector('ul');

function convertToNumber(value) {
  if (!isNaN(Number(value.replace('$', '').replaceAll(',', '')))) {
    return Number(value.replace('$', '').replaceAll(',', ''));
  }
}

function sortList(list) {
  const sorted = [...list.querySelectorAll('li')].sort((a, b) => {
    return (
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)
    );
  });

  sorted.forEach((employee) => list.append(employee));
}

function getEmployees(list) {
  const employees = [...list.querySelectorAll('li')].map((employee) => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: convertToNumber(employee.dataset.salary),
      age: employee.dataset.age,
    };
  });

  return employees;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
