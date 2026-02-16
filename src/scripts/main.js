'use strict';

const list = document.querySelector('.employees-list');

function parseSalary(item) {
  const dataSalary = item.dataset.salary;

  if (!dataSalary) {
    return 0;
  }

  const clean = dataSalary.replace(/[^0-9]/g, '');

  return Number(clean) || 0;
}

function sortList(employeesList) {
  const items = Array.from(employeesList.children);

  items.sort(
    (firstEmployee, secondEmployee) =>
      parseSalary(secondEmployee) - parseSalary(firstEmployee),
  );
  items.forEach((item) => employeesList.appendChild(item));
}

function getEmployees(employeesList) {
  return Array.from(employeesList.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item),
    age: Number(item.dataset.age),
  }));
}

sortList(list);
getEmployees(list);
