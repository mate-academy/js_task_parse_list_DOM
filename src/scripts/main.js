'use strict';

const notitia = document.querySelector('ul');
const allNotitia = document.querySelectorAll('li');

function sortList(list) {
  const listSorted = [...list].sort((a, b) =>
    +b.dataset.salary.slice(1).split(',').join('')
    - +a.dataset.salary.slice(1).split(',').join('')
  );

  notitia.append(...listSorted);
}

function getEmployees(list) {
  return [...list].map(x => ({
    name: x.textContent,
    position: x.dataset.position,
    salary: x.dataset.salary,
    age: x.dataset.age,
  }));
}

sortList(allNotitia);
getEmployees(allNotitia);
