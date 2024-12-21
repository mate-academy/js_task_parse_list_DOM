'use strict';

function convertToNum(salary) {
  return Number(salary.replace(/[^0-9.-]+/g, ''));
}

// Select the first <ul> element (or adjust the selector as needed)
const list = document.querySelector('ul');

function sortList() {
  const listArray = Array.from(list.children);

  listArray.sort((a, b) => {
    const salaryA = convertToNum(a.dataset.salary);
    const salaryB = convertToNum(b.dataset.salary);

    return salaryB - salaryA;
  });

  listArray.forEach((item) => list.appendChild(item));
}

function getEmployees() {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    salary: convertToNum(item.dataset.salary),
    position: item.dataset.position,
    age: Number(item.dataset.age),
  }));
}

getEmployees();
sortList(list);
