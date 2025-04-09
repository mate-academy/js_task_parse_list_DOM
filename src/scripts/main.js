'use strict';

const listDoc = document.querySelector('ul');

function getSalary(li) {
  const salaryNumber = li.dataset.salary
    .split('$')
    .join('')
    .split(',')
    .join('');

  return Number(salaryNumber);
}

function sortList(list) {
  const arr = Array.from(list.children);

  arr.sort((a, b) => getSalary(b) - getSalary(a));

  arr.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const listArr = Array.from(list.children);

  return listArr.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: getSalary(li),
    age: li.dataset.age,
  }));
}

sortList(listDoc);
getEmployees(listDoc);
