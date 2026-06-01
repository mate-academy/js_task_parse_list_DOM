'use strict';

function salaryReplace(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

const list = document.querySelector('ul');

function sortList(list) {
  const listArray = Array.from(list.children);

  listArray.sort((a, b) => {
    const salaryA = salaryReplace(a.dataset.salary);
    const salaryB = salaryReplace(b.dataset.salary);

    return salaryB - salaryA;
  });
  list.append(...listArray);
}

function getEmployees(list) {
  const items = list.children;

  return Array.from(items).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: salaryReplace(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(list);
getEmployees(list);
