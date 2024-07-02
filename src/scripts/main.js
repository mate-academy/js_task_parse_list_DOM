'use strict';

const list = document.querySelector('ul');

function parseIntegers(num) {
  return parseInt(num.slice(1).replace(',', ''), 10);
}

function sortList(arr) {
  const items = Array.from(arr.children);

  items.sort((a, b) => {
    const salaryA = parseIntegers(a.dataset.salary);
    const salaryB = parseIntegers(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  items.forEach((item) => {
    list.appendChild(item);
  });

  return list;
}

const getEmployees = (arr) => {
  const items = Array.from(arr.children);

  return items.map((item) => ({
    name: item.textContent.trim(),
    salary: parseIntegers(item.dataset.salary),
    age: parseInt(item.dataset.age),
  }));
};

sortList(list);

getEmployees(list);
