'use strict';

const listDoc = document.querySelector('ul');

const listt = [...document.querySelectorAll('li')];

function getNumber(li) {
  return Number(li.dataset.salary.replaceAll('$', '').replaceAll(',', ''));
}

function sortList(list) {
  list
    .sort((a, b) => getNumber(b) - getNumber(a))
    .forEach((item) => listDoc.append(item));

  return list;
}

function getEmployee(list) {
  return list.map((li) => ({
    name: li.textContent,
    position: li.dataset.position,
    salary: getNumber(li),
    age: +li.dataset.age,
  }));
}

sortList(listt);
getEmployee(listt);
