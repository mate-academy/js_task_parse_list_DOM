'use strict';

const list = document.querySelector('ul');
const listOfItems = Array.from(list.children);

function parseSalary(salaryStr) {
  return +salaryStr.replace(',', '').slice(1);
}

function sortList(items) {
  const sorted = [...items].sort((a, b) => {
    const itemA = parseSalary(a.dataset.salary);
    const itemB = parseSalary(b.dataset.salary);

    return itemB - itemA;
  });

  sorted.forEach((item) => list.appendChild(item));
}

function getEmployees(items) {
  return items.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

sortList(listOfItems);
getEmployees(listOfItems);
