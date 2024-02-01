'use strict';

const list = document.querySelector('ul');
const items = document.querySelectorAll('li');

function sortList() {
  return [...items].sort((a, b) => (
    +b.dataset.salary.replace(/[^\d]/g, '')
    - +a.dataset.salary.replace(/[^\d]/g, '')
  ));
}

function getEmployees() {
  const sortedEmployees = sortList(items);

  return (
    list.innerHTML = sortedEmployees.map(item => (`
    <li
      data-position="${item.dataset.position}"
      data-salary="${item.dataset.salary}"
      data-age="${item.dataset.age}"
    >
      ${item.textContent}
    </li>
  `)).join('')
  );
}

getEmployees(list);
