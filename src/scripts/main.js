'use strict';

const list = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sortList(employeeList) {
  const salary = employeeList.sort((
    a, b) => +b.dataset.salary.split('$').join('').split(',').join('')
    - +a.dataset.salary.split('$').join('').split(',').join(''));

  for (const item of salary) {
    ul.append(item);
  }

  return ul;
}

function getEmployees(employeeList) {
  const arr = [];

  for (const person of employeeList) {
    arr.push({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  }

  return arr;
}

sortList(list);
getEmployees(list);
