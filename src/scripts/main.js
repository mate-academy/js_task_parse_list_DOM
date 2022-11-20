'use strict';

const employees = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function toNumber(text) {
  return +text.replace(/\D/g, '');
}

function sortList(list) {
  const newList = [...list];

  newList.sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  employeesList.append(...newList);
}

sortList(employees);

function getEmployees(list) {
  return list.map((item) => ({ name: item.innerText,
    ...item.dataset,
}));
}

getEmployees(employees);
