'use strict';

function toInt(num) {
  return parseInt(num.match(/\d+/g).join(''), 10);
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    return toInt(b.dataset.salary) - toInt(a.dataset.salary);
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const employees = Array.from(list.children).map((li) => ({
    name: li.textContent,
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: parseInt(li.dataset.age, 10),
  }));

  return employees;
}

sortList(document.querySelector('ul'));
getEmployees(document.querySelector('ul'));
