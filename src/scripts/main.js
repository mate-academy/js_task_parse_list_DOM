'use strict';

// write code here
const list = document.querySelector('ul');

function parseSalary(salary) {
  if (typeof salary === 'number') {
    return salary;
  }

  if (!salary) {
    return 0;
  }

  const cleaned = String(salary).replace(/[^0-9.-]+/g, '');

  return Number(cleaned) || 0;
}

function getEmployees(listElement) {
  if (!listElement) {
    return [];
  }

  const items = Array.from(listElement.querySelectorAll('li'));

  return items.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position || '',
    salary: parseSalary(li.dataset.salary),
    age: parseSalary(li.dataset.age),
  }));
}

function sortList(listElement) {
  if (!listElement) {
    return;
  }

  const items = Array.from(listElement.querySelectorAll('li'));

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((li) => listElement.appendChild(li));
}

if (list) {
  sortList(list);
  getEmployees(list);
}
