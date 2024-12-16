'use strict';

const list = document.querySelector('ul');

function parseSalary(salary) {
  return Number(salary.replace('$', '').replace(',', ''));
}

function sortList(ulElement) {
  const items = Array.from(ulElement.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => ulElement.appendChild(item));
}

function getEmployees(ulElement) {
  const items = Array.from(ulElement.children);

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(list);

getEmployees(list);
