'use strict';

const listOfEmployees = document.querySelectorAll('li[data-position]');

const convert = string => +string.replace(/[^\d.]/g, '');

function sortList(list) {
  [...list]
    .sort((a, b) => convert(b.dataset.salary) - convert(a.dataset.salary))
    .forEach(item => item.parentElement.appendChild(item));
};

function getEmployees(list) {
  return [...list].map(employee => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
