'use strict';

const employeesList = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function sortList(list) {
  const sortedList = [...list]
    .sort((a, b) => convToNum(b.dataset.salary) - convToNum(a.dataset.salary));

  employeesList.append(...sortedList);
}

function convToNum(item) {
  return +item.replace(/\D/g, '');
}

function getEmployees(list) {
  return [...list].map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
