'use strict';

const list = document.querySelectorAll('li');
const box = document.querySelector('ul');

function getNumber(string) {
  return +string.dataset.salary.split('$').join('').split(',').join('');
}

function sortList(data) {
  const sortedData = [...data].sort((a, b) => getNumber(b) - getNumber(a));

  box.append(...sortedData);
}

function getEmployees(employees) {
  const arrayOfEmployees = [...employees].map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });

  return arrayOfEmployees;
}

sortList(list);
getEmployees(list);
