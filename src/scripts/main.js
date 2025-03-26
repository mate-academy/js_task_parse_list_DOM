'use strict';

const employeeArr = Array.from(document.querySelectorAll('li'));
const listUl = document.querySelector('ul');

function sortList(list) {
  list.sort(
    (a, b) => {
      const salaryA = a.dataset.salary.split('$').join('').split(',').join('');
      const salaryB = b.dataset.salary.split('$').join('').split(',').join('');

      return +salaryB - +salaryA;
    });

  listUl.append(...list);
}

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,

  }));
}

sortList(employeeArr);
getEmployees(employeeArr);
