'use strict';

const listItems = [...document.querySelectorAll('li')];
const domList = document.querySelector('ul');

function parseSalary(salaryString) {
  return +salaryString.replaceAll('$', '').replaceAll(',', '');
}

function sortList(list) {
  list.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary));
  list.forEach(listItem => domList.append(listItem));
}

function getEmployees(list) {
  return list.map(listItem => ({
    name: listItem.innerText,
    position: listItem.dataset.position,
    salary: listItem.dataset.salary,
    age: listItem.dataset.age,
  }));
}

sortList(listItems);
getEmployees(listItems);
