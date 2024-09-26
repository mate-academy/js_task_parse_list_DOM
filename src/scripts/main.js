'use strict';

const employeesList = document.querySelector('ul');
const employees = [...employeesList.children];

function sortList(list) {
  list.sort((a, b) =>
    +toNumber(b.dataset.salary)
    - +toNumber(a.dataset.salary)
  );

  employeesList.append(...list);
}

function toNumber(number) {
  return number.split(',').join('').replace('$', '');
}

function getEmployees(list) {
  return list.map(person => {
    return {
      name: person.innerText.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
}

sortList(employees);
getEmployees(employees);
