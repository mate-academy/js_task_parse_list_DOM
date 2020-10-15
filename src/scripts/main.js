'use strict';

const ul = document.querySelector('ul');
const liItems = document.querySelectorAll('li');

const convertToNumber = (str) =>
  (+str.dataset.salary.replace(/[$,]/g, ''));

function sortList(list) {
  const sortedList = [...list].sort((previous, next) =>
    (convertToNumber(next) - convertToNumber(previous)));

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
