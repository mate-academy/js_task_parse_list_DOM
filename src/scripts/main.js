'use strict';

const list = document.querySelectorAll('ul li');
const listElements = Array.from(list.children);

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

function sortList(elements) {
  elements.sort((item1, item2) => {
    const salaryA = parseSalary(item1.dataset.salary);
    const salaryB = parseSalary(item2.dataset.salary);

    return salaryB - salaryA;
  });

  elements.forEach((item) => list.appendChild(item));
}

function getEmployees(elements) {
  return elements.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

sortList(listElements);
getEmployees(listElements);
