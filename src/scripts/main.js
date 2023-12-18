'use strict';

const list = document.querySelector('ul');
const items = document.querySelectorAll('li');

function sortList(array) {
  return [...array].sort((a, b) => {
    const valueA = parseFloat(a.dataset.salary.replace(/[^\d.]/g, ''));
    const valueB = parseFloat(b.dataset.salary.replace(/[^\d.]/g, ''));

    return valueB - valueA;
  },
  );
}

function getEmployees(array) {
  return [...array].map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: +item.dataset.age,
  }));
}

getEmployees(items);

const newList = sortList(items);

list.innerHTML = `
  <ul>
    ${newList.map(item => `
      <li
        data-position=${item.dataset.position}
        data-salary=${item.dataset.salary}
        data-age=${item.dataset.age}
      >
        ${item.textContent}
      </li>
    `).join('')}
  </ul>
`;
