'use strict';

const list = document.querySelector('ul');

getEmployees(list);
sortList(list);

function getEmployees(list2) {
  const items = Array.from(list2.querySelectorAll('li'));
  const employees = [];

  for (const el of items) {
    const salary = Number(el.dataset.salary.slice(1).replace(/,/g, ''));

    employees.push({
      name: el.textContent,
      position: el.dataset.position,
      salary: salary,
      age: Number(el.dataset.age),
    });
  }

  return employees;
}

function sortList(list2) {
  const items = Array.from(list2.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.slice(1).replace(/,/g, ''));
    const salaryB = Number(b.dataset.salary.slice(1).replace(/,/g, ''));

    return salaryB - salaryA;
  });

  items.forEach((item) => list2.appendChild(item));
}
