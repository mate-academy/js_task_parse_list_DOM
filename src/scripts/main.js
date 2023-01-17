'use strict';

const employeesList = document.querySelectorAll('li');
const sumString = string => +string.slice(1).split(',').join('');

const sortList = function(list) {
  return [...list].sort((a, b) =>
    sumString(b.dataset.salary) - sumString(a.dataset.salary));
};

document.querySelector('ul').append(...sortList(employeesList));

const getEmployees = function(list) {
  return [...list].map(el => {
    return ({
      name: el.innerText,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    });
  });
};

getEmployees(employeesList);
