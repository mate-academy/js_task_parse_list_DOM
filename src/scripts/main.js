'use strict';

// write code here
const list = document.querySelector('ul');
const items = Array.from(list.querySelectorAll('li'));

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[$,]/g, ''));
}

function sortList(listElements) {
  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });
  items.forEach((item) => listElements.appendChild(item));
}

function getEmployees(listElements) {
  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(list);
getEmployees(list);
