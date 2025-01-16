'use strict';

function parseSalary(salaryString) {
  return parseFloat(salaryString.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age, 10),
  }));
}

const employeeList = document.querySelector('ul');

if (employeeList) {
  sortList(employeeList);

  const employees = getEmployees(employeeList);

  // eslint-disable-next-line no-console
  console.log(employees);
}
