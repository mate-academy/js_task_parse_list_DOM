'use strict';

function toNumber(value) {
  return Number(value.replace('$', '').replace(',', ''));
}

function sortList(ulElement) {
  const items = Array.from(ulElement.children);

  items.sort((a, b) => {
    const salaryA = toNumber(a.dataset.salary);
    const salaryB = toNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => ulElement.append(item));
}

function getEmployees(ulElement) {
  return Array.from(ulElement.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: toNumber(item.dataset.salary),
    age: toNumber(item.dataset.age),
  }));
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
