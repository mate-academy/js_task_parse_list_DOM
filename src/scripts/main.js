'use strict';

// write code here
const list = document.querySelector('ul');

const listElements = [...list.children];

const sortedElements = listElements.sort((a, b) => {
  return (salaryInNumber(b)) - (salaryInNumber(a));
});

function salaryInNumber(value) {
  return +(value.dataset.salary.split(',').join('').slice(1));
}

list.innerHTML = '';

sortedElements.forEach(el => list.appendChild(el));
