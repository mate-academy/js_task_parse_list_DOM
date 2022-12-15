'use strict';

const list = document.querySelectorAll('li');

const strToNo = (str) => {
  return Number(str.slice(1).split(',').join(''));
};

const sortBySalary = (employees) => {
  return [...employees].sort((a, b) =>
    strToNo(b.dataset.salary) - strToNo(a.dataset.salary));
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

document.querySelector('ul').append(...sortBySalary(list));
getEmployees(list);
