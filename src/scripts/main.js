'use strict';

const list = document.querySelector('ul');

const parseSalary = (salaryStr) => {
  return Number(salaryStr.replace(/[^\d]/g, ''));
};

function sortList(listElement) {
  const items = Array.from(listElement.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.append(item));
}

function getEmployees(listElement) {
  return Array.from(listElement.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(list);

getEmployees(list);
