'use strict';

function sortList(list) {
  list.sort((a, b) => b.dataset.salary.slice(1).split(',').join('')
    - a.dataset.salary.slice(1).split(',').join(''));

  for (const person of list) {
    document.querySelector('ul').append(person);
  }
}

function getEmployees(list) {
  const employees = [];

  list.forEach(li => {
    employees.push({
      'name': li.innerText,
      'position': li.dataset.position,
      'salary': li.dataset.salary,
      'age': +li.dataset.age,
    });
  });

  return employees;
}

const people = [...document.querySelector('ul').children];

sortList(people);

// eslint-disable-next-line no-console
console.table(getEmployees(people));
