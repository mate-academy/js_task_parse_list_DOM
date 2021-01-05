'use strict';

const employeesList = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortList(list, convert) {
  const sortedList = [...list].sort((a, b) =>
    convert(b.dataset.salary) - convert(a.dataset.salary));

  employeesList.append(...sortedList);
}

function convertSalary(salary) {
  return +string.slice(1).split(',').join('');
}

sortList(employees, convertSalary);

function getEmployees(list) {
  const employer = [];

  for (const person of list) {
    employer.push({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  }

  return employer;
}

getEmployees(employees);
