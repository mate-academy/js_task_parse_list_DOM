'use strict';

const list = document.querySelector('ul');

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]/g, ''));
}

function sortList(listElement) {
  const items = [...listElement.children];

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => listElement.appendChild(item));
}

function getEmployees(listElement) {
  const items = [...listElement.children];

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(list);
getEmployees(list);
