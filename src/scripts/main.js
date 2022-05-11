'use strict';

const liArray = document.querySelectorAll('[data-salary]');

function sortList(array) {
  [...array].sort((a, b) => {
    const NumbA = a.dataset.salary.slice(1).split(',').join('');
    const NumbB = b.dataset.salary.slice(1).split(',').join('');

    return NumbB - NumbA;
  }).forEach(e => document.querySelector('ul').appendChild(e));
};

sortList(liArray);

function getEmployees(array) {
  return [...array].sort((a, b) => {
    const NumbA = a.dataset.salary.slice(1).split(',').join('');
    const NumbB = b.dataset.salary.slice(1).split(',').join('');

    return NumbB - NumbA;
  });
};

const empoyees = getEmployees(liArray);

const ulItem = document.querySelector('ul');

ulItem.innerHTML = `
${[...empoyees].map(e => `
    <li
      data-position=${e.dataset.position}
      data-salary=${e.dataset.salary}
      data-age=${e.dataset.age}
    >
      ${e.innerHTML}
    </li>
  `).join('')}
`;
