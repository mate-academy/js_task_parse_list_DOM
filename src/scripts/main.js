'use strict';

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

const employees = getEmployees(employeeList);

document.body.insertAdjacentHTML(
  'beforeend',
  `<pre>${JSON.stringify(employees, null, 2)}</pre>`,
);
