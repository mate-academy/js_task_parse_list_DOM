'use strict';

const List = document.querySelectorAll('li');
let sortedList;

function sortList(list) {
  sortedList = [...list].sort((a, b) =>
    +b.attributes[1].value.replace(/[^\d]/g, '')
    - +a.attributes[1].value.replace(/[^\d]/g, ''));

  const ul = document.querySelector('ul');

  ul.innerHTML = sortedList.map(li => `
    <li>
      ${li.innerText}
    </li>
  `).join('');
}

function getEmployees(list) {
  const employees = [];

  sortedList.map((li, index) => employees.push(
    {
      name: li.innerText.trim(),
      position: index + 1,
      salary: li.attributes[1].value,
      age: li.attributes[2].value,
    }
  ));

  return employees;
}

sortList(List);
getEmployees(List);
