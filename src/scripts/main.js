'use strict';

const employees = [...document.querySelectorAll('li')];

employees
  .sort((a, b) => b.dataset.salary
    .slice(1).split(',').join('') - a.dataset.salary
    .slice(1).split(',').join(''));

document.querySelector('ul').append(...employees);

const getEmployees = (list) => {
  return list.map(person => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
};

getEmployees(employees);
