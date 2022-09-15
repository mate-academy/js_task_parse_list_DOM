'use strict';

const ul = document.body.querySelector('ul');

function sortList(list) {
  [...list.children]
    .sort((elementA, elementB) =>
      formatingSalary(elementB.dataset.salary)
      - formatingSalary(elementA.dataset.salary))
    .forEach(li => list.append(li));
}

function formatingSalary(salary) {
  return +salary.split('').filter(item =>
    '0123456789'.includes(item)).join('');
}

function getEmployees(list) {
  return [...list.children].map(li => {
    return {
      name: li.innerText,
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    };
  });
}

sortList(ul);
getEmployees(ul);
