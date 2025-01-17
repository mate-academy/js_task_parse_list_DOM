'use strict';

// write code here
const ul = document.getElementsByTagName('ul')[0];

const children = ul.children;

getEmployees(children);
sortList(children);

function convertToNumber(value) {
  return Number(value.replace(/[^0-9.-]+/g, ''));
}

function getEmployees(data) {
  return [...data].map((li) => {
    return {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: convertToNumber(li.dataset.salary),
      age: convertToNumber(li.dataset.age),
    };
  });
}

function sortList(list) {
  const items = [...list];

  items.sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => ul.appendChild(item));
}
