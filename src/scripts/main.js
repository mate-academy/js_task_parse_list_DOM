'use strict';

const listOfEmployees = document.querySelectorAll('li');

function sortList(list) {
  function strToNum(str) {
    return +str.slice(1).split(',').join('');
  }

  return [...list].sort((item1, item2) =>
    strToNum(item2.dataset.salary) - strToNum(item1.dataset.salary));
}

const sortedListOfEmployees = sortList(listOfEmployees);
const ul = document.querySelector('ul');

ul.innerHTML = '';

for (const item of sortedListOfEmployees) {
  ul.insertAdjacentHTML('beforeend', `
    <li
      data-position=${item.dataset.position}
      data-salary=${item.dataset.salary}
      data-age=${item.dataset.age}
    >
      ${item.textContent.trim()}
    </li>
  `);
}

function getEmployees(list) {
  return list.map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

getEmployees(sortedListOfEmployees);
