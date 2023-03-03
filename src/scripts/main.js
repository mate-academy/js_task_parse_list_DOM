'use strict';

const list = document.querySelectorAll('li');
const number = (str) => {
  return Number(str.slice(1).split(',').join(''));
};

const salary = (employees) => {
  return [...employees].sort((a, b) =>
    number(b.dataset.salary) - number(a.dataset.salary));
};

const getEmployees = (employees) => {
  return [...employees].map(person => (
    {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    }));
};

document.querySelector('ul').append(...salary(list));
getEmployees(list);
