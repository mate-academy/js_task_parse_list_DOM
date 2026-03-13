'use strict';

const list = document.querySelector('ul');

function getSalaryNumber(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

function sortList(listElement) {
  const items = Array.from(listElement.children);

  items.sort((a, b) => {
    const salaryA = getSalaryNumber(a.dataset.salary);
    const salaryB = getSalaryNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => listElement.append(item));
}

function getEmployees(listElement) {
  const items = Array.from(listElement.children);

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalaryNumber(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(list);
getEmployees(list);
