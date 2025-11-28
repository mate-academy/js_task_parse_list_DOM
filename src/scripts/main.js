'use strict';

// write code here

function sortList(employeesList) {
  const items = Array.from(employeesList.children);

  items.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/,/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/,/g, ''));

    return salaryB - salaryA;
  });

  items.forEach((item) => employeesList.appendChild(item));
}

function getEmployees(employeesList) {
  const items = Array.from(employeesList.children);

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary),
    age: item.dataset.age,
  }));
}

const list = document.querySelector('ul');

sortList(list);

getEmployees(list);
