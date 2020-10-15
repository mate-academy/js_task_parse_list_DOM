'use strict';

const ul = document.querySelector('ul');
const liItems = document.querySelectorAll('li');

function sortList(list) {
  const sortedList = [...list].sort((previous, next) =>
    (+next.dataset.salary.replace(/[$,]/g, '')
      - +previous.dataset.salary.replace(/[$,]/g, '')));

  ul.append(...sortedList);
}

function getEmployees(list) {
  return [...list]
    .map(li => ({
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    }));
}

sortList(liItems);
getEmployees(liItems);
