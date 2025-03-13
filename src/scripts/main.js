'use strict';

function toInt(num) {
  return parseInt(num.match(/\d+/g).join(''), 10);
}

function sortList(list) {
  const arr = Array.from(list.children);

  arr.sort((a, b) => {
    return toInt(b.dataset.salary) - toInt(a.dataset.salary);
  });

  arr.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const employees = Array.from(list.children).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: parseInt(li.dataset.age, 10),
  }));

  return employees;
}

sortList(document.querySelector('ul'));
getEmployees(document.querySelector('ul'));
