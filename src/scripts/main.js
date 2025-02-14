'use strict';

const employeesList = document.querySelector('ul');

const sortList = (employees) => {
  const items = Array.from(employees.children);

  items.sort(
    (first, second) =>
      Number(second.dataset.salary.replace(/[$,]/g, '')) -
      Number(first.dataset.salary.replace(/[$,]/g, '')),
  );
  items.forEach((item) => employeesList.appendChild(item));
};
const getEmployees = (employees) => {
  return Array.from(employees.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace(/[$,]/g, '')),
    age: Number(item.dataset.age),
  }));
};

sortList(employeesList);
getEmployees(employeesList);
