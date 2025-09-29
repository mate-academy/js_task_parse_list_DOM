'use strict';

function parseSalary(salary) {
  if (!salary) {
    return 0;
  }

  return Number(salary.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  if (!list) {
    return;
  }

  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  if (!list) {
    return [];
  }

  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position || '',
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age) || 0,
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('ul');

  if (list) {
    sortList(list);

    const employees = getEmployees(list);

    list.innerHTML = employees
      .map(
        (emp) =>
          `<li data-position="${emp.position}" data-salary="$${emp.salary}" data-age="${emp.age}">${emp.name}</li>`,
      )
      .join('');
  }
});

export { parseSalary, sortList, getEmployees };
