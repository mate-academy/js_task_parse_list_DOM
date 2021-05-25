'use strict';

function morphSalary(salary) {
  return Number(salary.replace('$', '').replace(',', ''));
}

function arrayFromLis(list) {
  return Array.from(list.querySelectorAll('li'));
}

function sortList(list) {
  list.append(...arrayFromLis(list)
    .sort((a, b) => morphSalary(b.dataset.salary)
    - morphSalary(a.dataset.salary)));
}

function getEmployees(list) {
  return arrayFromLis(list)
    .map(person => {
      const employee = {
        name: person.innerText,
        position: person.dataset.position,
        salary: morphSalary(person.dataset.salary),
        age: +person.dataset.age,
      };

      return employee;
    });
}

const ul = document.querySelector('ul');

sortList(ul);
(getEmployees(ul));
