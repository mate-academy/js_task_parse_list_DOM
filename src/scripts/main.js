'use strict';

const ul = document.querySelector('ul');

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  list.innerHTML = '';
  items.forEach((li) => list.appendChild(li));

  return list;
}

function parseSalary(salary) {
  const parsed = Number(salary.replace(/[$,]/g, ''));

  return parsed;
}

function getEmployees(list) {
  const items = [...list.querySelectorAll('li')];

  const employees = items.map((li) => {
    return {
      name: li.textContent,
      position: li.dataset.position,
      salary: parseSalary(li.dataset.salary),
      age: Number(li.dataset.age),
    };
  });

  return employees;
}

sortList(ul);
getEmployees(ul);
