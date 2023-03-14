'use strict';

const listPosition = [...document.querySelectorAll('li')];

function sortList(list) {
  const sortSalary = [...list].sort(
    (a, b) =>
      transformToNum(b.dataset.salary) - transformToNum(a.dataset.salary)
  );

  return sortSalary;
}

function transformToNum(str) {
  return +str.split(',').join('').slice(1);
}

function getEmployees(list) {
  const employees = list.map((el) => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));

  return employees;
}

document.querySelector('ul').append(...sortList(listPosition));
// sortList(listPosition);
getEmployees(listPosition);
