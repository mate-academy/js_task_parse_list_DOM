'use strict';

// write code here
const list = document.querySelector('ul');

function getSalary(li) {
  return Number(li.dataset.salary.replace(/[^0-9.-]/g, ''));
}

function sortList(listData) {
  const items = Array.from(listData.children);

  items.sort((a, b) => getSalary(b) - getSalary(a));
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(listData) {
  return Array.from(listData.children).map((li) => {
    return {
      name: li.innerText,
      position: li.dataset.position,
      salary: getSalary(li),
      age: li.dataset.age,
    };
  });
}

sortList(list);
getEmployees(list);
