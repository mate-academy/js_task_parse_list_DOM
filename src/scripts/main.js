'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortBySalary(list) {
  list.sort((a, b) =>
    +(b.dataset.salary.replace(/[\s.,$]/g, ''))
    - +(a.dataset.salary.replace(/[\s.,$]/g, ''))
  );

  employeesList.append(...list);
}

function getSortedList(list) {
  const sortedEmployees = [];

  for (const person of list) {
    const personInfo = {
      name: person.innerHTML.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

    sortedEmployees.push(personInfo);
  }

  return sortedEmployees;
}

sortBySalary(employees);
getSortedList(employees);
