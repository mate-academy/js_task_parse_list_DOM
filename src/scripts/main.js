'use strict';

function parseNumber(value) {
  const num = Number(value);

  return isNaN(num) ? 0 : num;
}

function getSalary(li) {
  return parseNumber(li.dataset.salary);
}

function sortList(ul) {
  const items = Array.from(ul.querySelectorAll('li'));

  items.sort((a, b) => getSalary(b) - getSalary(a));

  ul.innerHTML = '';
  items.forEach((item) => ul.appendChild(item));
}

function getEmployees(ul) {
  return Array.from(ul.querySelectorAll('li')).map((li) => ({
    name: li.dataset.name || '', // default to empty string if missing
    position: li.dataset.position || '',
    salary: parseNumber(li.dataset.salary),
    age: parseNumber(li.dataset.age),
  }));
}

const employeesList = document.getElementById('employees');

sortList(employeesList);

const employees = getEmployees(employeesList);

// eslint-disable-next-line no-console
console.log(employees);
