'use strict';

const items = [...document.querySelectorAll(`li`)];
const roster = document.querySelector('ul');

function salaryToNumber(li) {
  return Number(li.dataset.salary.replaceAll(',', '').replaceAll('$', ''));
}

function sortList(list) {
  const sortedArray = list
    .slice()
    .sort((a, b) => salaryToNumber(b) - salaryToNumber(a));

  roster.innerHTML = '';

  sortedArray.forEach((li) => roster.appendChild(li));
}

function getEmployees(list) {
  const workers = [];

  for (const item of list) {
    workers.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  }

  return workers;
}

sortList(items);
getEmployees(items);
