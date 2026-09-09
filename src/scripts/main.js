'use strict';

function getSalaryNumber(salaryStr) {
  const cleanString = salaryStr.replace('$', '').replaceAll(',', '');

  return Number(cleanString);
}

function sortList(listElement) {
  const items = [...listElement.children];

  items.sort((a, b) => {
    const salaryA = getSalaryNumber(a.dataset.salary);
    const salaryB = getSalaryNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  listElement.append(...items);
}

function getEmployees(listElement) {
  const items = [...listElement.children];

  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: Number(item.dataset.age),
    };
  });
}

const list = document.querySelector('ul');

if (list) {
  sortList(list);
  getEmployees(list);
}
