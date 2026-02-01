'use strict';

// write code here
const employeesList = document.querySelector('ul');

function getNumber(text) {
  return Number(text.replace(/[^0-9]/g, ''));
}

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => {
    const salaryA = getNumber(a.dataset.salary);
    const salaryB = getNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  for (const item of items) {
    list.appendChild(item);
  }
}

function getEmployees(list) {
  const items = [...list.children];

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getNumber(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}
sortList(employeesList);
getEmployees(employeesList);
