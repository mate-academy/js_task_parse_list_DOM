'use strict';

const employees = [...document.querySelectorAll('li')];
const peopleList = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  peopleList.append(...list);
}

function getEmployees(list) {
  const rightList = [];

  for (const person of list) {
    const human = {
      name: person.innerHTML,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

    rightList.push(human);
  }

  return rightList;
}

function toNumber(salary) {
  return Number(salary.replace('$', '').split(',').join(''));
}

sortList(employees);
getEmployees(employees);
