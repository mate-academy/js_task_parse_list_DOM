'use strict';

// write code here
function formatNumber(num) {
  return num.dataset.salary.replace(/\$/g, '').split(',').join('');
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const first = formatNumber(a);
    const second = formatNumber(b);

    return Number(second) - Number(first);
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace(/\$/g, '').split(',').join('')),
    age: Number(item.dataset.age),
  }));
}
sortList(document.querySelector('ul'));
getEmployees(document.querySelector('ul'));
