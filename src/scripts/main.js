'use strict';

// write code here
function parseSalary(str) {
  return Number(str.replace(/[^0-9]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );
  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.querySelectorAll('li')).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

const employeesArray = getEmployees(employeeList);

// eslint-disable-next-line no-console
console.log(employeesArray);
