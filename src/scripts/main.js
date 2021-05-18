'use strict';

const list = document.body.children[1].children;
const array = [...list].map(item => [
  item.innerText,
  item.dataset.position,
  item.dataset.salary.replace(/[^0-9]/g, ''),
  item.dataset.age,
]);

function sortList(arr) {
  return arr.sort((a, b) => b[2] - a[2]);
}

function getEmployees(arr) {
  return arr.map(item => {
    return {
      name: item[0],
      position: item[1],
      salary: '$' + item[2],
      age: item[3],
    };
  });
}

sortList(array);

const employees = getEmployees(array);
const replace = document.querySelector('ul');

replace.innerHTML = `
  ${employees.map(employee => `
    <li
      data-position="${employee.position}"
      data-salary="${employee.salary}"
      data-age="${employee.age}"
    >
      ${employee.name}
    </li>
  `).join('')}
`;
