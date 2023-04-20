'use strict';

const listTotal = document.querySelector('ul');
const listOfEmployees = document.querySelectorAll('ul > li');

function sortList(list) {
  return ([...list].sort((a, b) => formatSalary(
    b.dataset.salary) - formatSalary(a.dataset.salary)));
}

const sortedList = sortList(listOfEmployees);

listTotal.append(...sortedList);

function getEmployees(list) {
  return list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
};

getEmployees(sortedList);

function formatSalary(salary) {
  return +salary.replace('$', '').replace(',', '');
}
