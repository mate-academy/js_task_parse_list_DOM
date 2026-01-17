'use strict';

const list = document.querySelector('ul');

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList(listElement) {
  const items = Array.from(listElement.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listElement.append(...items);
}

function getEmployees(listElement) {
  const items = Array.from(listElement.children);

  return items.map((item) => {
    return {
      name: item.innerText.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

sortList(list);

getEmployees(list);
