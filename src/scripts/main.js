'use strict';

const list = document.querySelector('ul');
const items = document.querySelectorAll('li');

function toNum(value) {
  const num = value;

  return +num.split('').filter(a => a !== ',' && a !== '$').join('');
}

const newList = [...items].sort((a, b) =>
  toNum(b.dataset.salary) - toNum(a.dataset.salary));

for (let i = 0; i < items.length; i++) {
  list.append(newList[i]);
}
