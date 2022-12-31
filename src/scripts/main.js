/* eslint-disable no-shadow */
'use strict';

const employeesList = document.querySelector('ul');
const [...employees] = document.querySelectorAll('li');

function sortList(list) {
  const toNumber = (string) => +string.slice(1).split(',').join('');

  const sortedList = list.sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  employeesList.append(...sortedList);
};

function getEmployees(list) {
  return list.map(employee => {
    const { name, position, salary, age } = employee.dataset;

    return {
      name, position, salary, age,
    };
  });
};

sortList(employees);
getEmployees(employees);
