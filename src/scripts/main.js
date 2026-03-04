'use strict';

function getSalaryNumber(salary) {
  return Number(salary.replace(/\$/g, '').replace(/,/g, ''));
}

function sortList({ list }) {
  const items = Array.from(list.children);

  const sortedItems = items.sort((a, b) => {
    const salaryA = getSalaryNumber(a.dataset.salary);
    const salaryB = getSalaryNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  sortedItems.forEach((item) => list.appendChild(item));
}

function getEmployees({ list }) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalaryNumber(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const employeeList = document.querySelector('ul');

sortList({ list: employeeList });
getEmployees({ list: employeeList });
