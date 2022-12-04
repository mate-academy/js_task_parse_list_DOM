'use strict';

const employeesList = document.querySelectorAll('li');

const formatString = function(string) {
  return +string.slice(1).split(',').join('');
};

const sortList = function(list) {
  return [...list].sort((a, b) =>
    formatString(b.dataset.salary) - formatString(a.dataset.salary));
};

document.querySelector('ul').append(...sortList(employeesList));

const getEmployees = function(list) {
  return [...list].map(employee => (
    {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    }));
};

getEmployees(employeesList);
