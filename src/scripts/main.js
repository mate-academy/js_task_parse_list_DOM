'use strict';

const listEl = document.querySelector('ul');

const sortList = function(list) {
  const sortedList = [...list.children]
    .sort((a, b) =>
      convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary));

  sortedList.forEach(employee => list.appendChild(employee));
};

const getEmployees = function(list) {
  return [...list.children].map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
};

const convertSalary = function(string) {
  return Number(string.slice(1).split(',').join(''));
};

sortList(listEl);
getEmployees(listEl);
