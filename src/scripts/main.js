'use strict';

// write code here
const infoData = document.querySelectorAll('li');
// console.log([...infoData].map((item) => item.innerText));
const result = [...infoData].sort((a, b) => {
  const aSort = a.dataset.salary
    .split(',')
    .join('')
    .split('')
    .splice(1)
    .join('');
  const bSort = b.dataset.salary
    .split(',')
    .join('')
    .split('')
    .splice(1)
    .join('');

  return bSort - aSort;
});

const core = document.querySelector('ul');
let coreHtml = '';

for (const item of result) {
  coreHtml
    += `
      <li
        data-position=${item.dataset.position}
        data-salary=${item.dataset.salary}
        data-age=${item.dataset.age}
      >
        ${item.innerText}
      </li>
    `;
}

core.innerHTML = coreHtml;
