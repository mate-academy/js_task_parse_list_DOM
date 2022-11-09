'use strict';

const list = document.querySelectorAll('[data-salary]');
const listArray = [...list];

function sortList() {
  function compare(a, b) {
    if (+a.dataset.salary < +b.dataset.salary) {
      return 1;
    }

    if (+a.dataset.salary > +b.dataset.salary) {
      return -1;
    }

    return 0;
  }

  let salary = listArray.map(person => {
    person.dataset.salary = person.dataset.salary.substring(1);
    person.dataset.salary = person.dataset.salary.split(',').join('');

    return person;
  });

  salary = salary.sort(compare);

  salary.forEach(li => document.querySelector('ul').appendChild(li));

  return salary;
}

function getEmployees() {
  return listArray.map(employee => ({
    name: employee.innerText,
    ...employee.dataset,
  }));
}

sortList();
getEmployees();
