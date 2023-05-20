'use strict';

// write code here
const liArray = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function getSalary(salary) {
  return +salary.replace('$', '').replace(',', '');
}

function sortList(list) {
  const sort = list.sort((a, b) =>
    getSalary(b.dataset.salary) - getSalary(a.dataset.salary));

  return sort;
}

const sortedList = sortList(liArray);

ul.append(...sortedList);

function getEmployees(list) {
  const arrEmployees = list.map((element) => ({
    name: element.innerText,
    position: element.dataset.position,
    salary: element.dataset.salary,
    age: element.dataset.age,
  }));

  return arrEmployees;
}

getEmployees(liArray);
