'use strict';

function parseSalary(salaryString) {
  return Number(salaryString.replace('$', '').replace(/,/g, ''));
}

function sortList(list) {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const listItems = Array.from(list.children);

  return listItems.map((li) => ({
    name: li.textContent.trim(),
    ...li.dataset,
  }));
}

const listEl = document.querySelector('ul');

if (listEl) {
  sortList(listEl);
  getEmployees(listEl);
}
