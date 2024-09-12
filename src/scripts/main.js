'use strict';

const listOfEmployees = [...document.querySelectorAll('li')];

function convertToNumber(string) {
  return Number(string.replace(/[^0-9]+/g, ''));
}

function sortList(list) {
  const parentElement = list[0].closest('ul');

  list
    .sort((a, b) => {
      return (
        convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)
      );
    })
    .forEach((employee) => parentElement.appendChild(employee));
}

function getEmployees(list) {
  return list.map((employee) => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: convertToNumber(employee.dataset.salary),
      age: +employee.dataset.age,
    };
  });
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
