'use strict';

const list = document.querySelector('ul');

function convertSalary(salaryString) {
  return parseInt(salaryString.replace(/[$,]/g, ''));
}

function sortList() {
  const sortedList = [...list.children]
    .sort((a, b) => convertSalary(b.dataset.salary)
     - convertSalary(a.dataset.salary));

  sortedList.forEach(item => list.appendChild(item));
}

[...list.children]
  .map(item => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: convertSalary(item.dataset.salary),
    age: parseInt(item.dataset.age),
  }));

sortList(list);
