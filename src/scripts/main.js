'use strict';

const list = document.querySelectorAll('li');
const items = Array.from(list);

items.sort((a, b) => {
  const salaryA = a.dataset.salary
    ? Number(a.dataset.salary.replace(/\$|,/g, ''))
    : 0;
  const salaryB = b.dataset.salary
    ? Number(b.dataset.salary.replace(/\$|,/g, ''))
    : 0;

  return salaryB - salaryA;
});

const ul = document.querySelector('ul');

if (ul) {
  ul.innerHTML = '';

  items.forEach((item) => {
    ul.appendChild(item);
  });
}
