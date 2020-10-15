'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((a, b) =>
    +(b.dataset.salary.replace(/[\s.,$]/g, ''))
    - +(a.dataset.salary.replace(/[\s.,$]/g, ''))
  );

  employeesList.append(...list);
}

function getEmployees(list) {
  const employeesObjects = list.map(person => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });

  return employeesObjects;
}

sortList(employees);
getEmployees(employees);
