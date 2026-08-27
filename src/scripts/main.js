'use strict';

const listEmployees = document.querySelector('ul');

function parseSalary(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((a, b) => {
    if (parseSalary(a.dataset.salary) === parseSalary(b.dataset.salary)) {
      return 0;
    }

    if (parseSalary(a.dataset.salary) > parseSalary(b.dataset.salary)) {
      return -1;
    }

    return 1;
  });

  items.forEach((item) => {
    list.appendChild(item);
  });
}

function getEmployees(list) {
  const items = [...list.querySelectorAll('li')];

  const employees = items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });

  return employees;
}

sortList(listEmployees);

getEmployees(listEmployees);
