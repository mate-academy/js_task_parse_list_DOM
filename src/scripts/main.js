'use strict';

const list = document.querySelector('ul');
const persons = document.querySelectorAll('ul li');

const sorted = [...persons].sort((a, b) => {
  return Number(b.dataset.salary
    .slice(1)
    .split(',')
    .join(''))
  - Number(a.dataset.salary
    .slice(1)
    .split(',')
    .join(''));
});

list.innerHTML = '';

for (const li of sorted) {
  list.appendChild(li);
};
