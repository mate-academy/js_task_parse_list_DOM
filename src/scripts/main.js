'use strict';

const elementUl = document.querySelector('ul');
const list = document.querySelectorAll('li');

function sortList() {
  const sortedList = [...list].sort((employee1, employee2) =>
    toNumber(employee2.dataset.salary) - toNumber(employee1.dataset.salary));

  elementUl.append(...sortedList);

  function toNumber(string) {
    return string.slice(1).split(',').join('');
  }
};

function getEmployees() {
  return [...list].map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
};

sortList();
getEmployees();
