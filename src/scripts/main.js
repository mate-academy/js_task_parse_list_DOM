'use strict';

const listEmployees = document.querySelector('ul');
const employees = [...listEmployees.children];

function toNumber(salary) {
  return Number(salary.replace(/,|\$/g, ''));
}

function sortList(list) {
  return [...list.children]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach(node => list.append(node));
}

function getEmployees(list) {
  return list.map(elem => (
    {
      'name': elem.innerText,
      ...elem.dataset,
    })
  );
}

sortList(listEmployees);
getEmployees(employees);
