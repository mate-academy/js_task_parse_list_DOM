'use strict';

const list = document.querySelector('ul');

function getSalary(li) {
  const rawSalary = li.dataset.salary;
  const cleanSalary = rawSalary.replace(/\D/g, '');

  return Number(cleanSalary);
}

function sortList(listElement) {
  const items = [...listElement.querySelectorAll('li')];

  items.sort((a, b) => getSalary(b) - getSalary(a));

  listElement.append(...items);
}

function getEmployees(listElement) {
  const items = [...listElement.querySelectorAll('li')];

  items.sort((a, b) => getSalary(b) - getSalary(a));

  return items.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: getSalary(li),
    age: Number(li.dataset.age),
  }));
}

sortList(list);
getEmployees(list);
