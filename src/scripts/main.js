'use strict';

const list = document.querySelectorAll('li');
let array = [...list].map(item => [
  item.innerText,
  item.dataset.position,
  item.dataset.salary.replace(/[^0-9]/g, ''),
  item.dataset.age,
]);

array = array.sort((a, b) => b[2] - a[2]);

const employees = [...array].map(item => {
  return {
    name: item[0],
    position: item[1],
    salary: '$' + item[2],
    age: item[3],
  };
});

const newList = document.querySelector('ul');

newList.innerHTML = `
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
