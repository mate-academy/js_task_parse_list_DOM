'use strict';

function parseSalary(s) {
  return Number(s.replace(/[^0-9.-]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => list.append(item));
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((el) => ({
    name:
      el.querySelector('.name')?.textContent.trim() || el.textContent.trim(),
    position: el.dataset.position,
    salary: parseSalary(el.dataset.salary),
    age: Number(el.dataset.age),
  }));
}

const ul = document.querySelector('ul');

if (ul) {
  sortList(ul);
  window.employeesArr = getEmployees(ul);
}
