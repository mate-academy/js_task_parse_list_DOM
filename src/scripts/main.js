'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortList(list) {
  const changedDataSalary = [...list].sort((a, b) => (
    +b.dataset.salary.slice(1).split(',').join('')
    - +a.dataset.salary.slice(1).split(',').join('')));

  listOfEmployees.append(...changedDataSalary);
}

function getEmployees(list) {
  return listOfEmployees.map(x => {
    return {
      name: x.textContent,
      position: x.dataset.position,
      salary: x.dataset.salary,
      age: x.dataset.age,
    };
  });
}
sortList(employees);
getEmployees(listOfEmployees);
