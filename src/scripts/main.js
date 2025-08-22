'use strict';

function toSalary(value) {
  return Number(String(value).replace(/[$,]/g, ''));
}

function sortList(ul) {
  const items = Array.from(ul.querySelectorAll('li'));

  items.sort((a, b) => toSalary(b.dataset.salary) - toSalary(a.dataset.salary));

  items.forEach((li) => ul.appendChild(li));
}

function getEmployees(ul) {
  return Array.from(ul.querySelectorAll('li')).map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: toSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

const listEl = document.querySelector('ul');

sortList(listEl);

getEmployees(listEl);
