'use strict';

function parseSalary(str) {
  return Number(str);
}

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  list.append(...items);
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((li) => ({
    name: li.querySelector('.name').textContent.trim(),
    position: li.querySelector('.position').textContent.trim(),
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

const employees = document.getElementById('ul');

sortList(employees);

getEmployees(employees);
