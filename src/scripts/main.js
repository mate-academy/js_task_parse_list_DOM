'use strict';

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = Number(a.dataset.salary);
    const salaryB = Number(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  for (let i = 0; i < items.length; i++) {
    list.appendChild(items[i]);
  }
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: Number(item.dataset.age),
  }));
}

const employees = document.querySelector('ul');

sortList(employees);

getEmployees(employees);
