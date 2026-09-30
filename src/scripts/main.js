'use strict';

const list = document.querySelector('ul');

function parseSalary(salaryStr) {
  return Number(salaryStr.replace('$', '').replaceAll(',', ''));
}

function sortList(listContainer) {
  const items = [...listContainer.querySelectorAll('li')];

  const sortedItems = items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  listContainer.append(...sortedItems);
}

function getEmployees(listContainer) {
  const employees = [...listContainer.querySelectorAll('li')];

  return employees.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: li.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
