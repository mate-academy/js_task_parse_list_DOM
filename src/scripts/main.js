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
    return {
      name: employee.dataset.name,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
};

sortList(employees);
getEmployees(employees);
