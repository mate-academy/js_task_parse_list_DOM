'use strict';

function getSalary(li) {
  return Number(li.dataset.salary);
}

function sortList(ul) {
  const items = Array.from(ul.querySelectorAll('li'));

  items.sort((a, b) => getSalary(b) - getSalary(a));

  ul.innerHTML = '';
  items.forEach((item) => ul.appendChild(item));
}

function getEmployees(ul) {
  return Array.from(ul.querySelectorAll('li')).map((li) => ({
    name: li.dataset.name,
    position: li.dataset.position,
    salary: Number(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
}

const employeesList = document.getElementById('employees');

sortList(employeesList);

const employees = getEmployees(employeesList);

// eslint-disable-next-line no-console
console.log(employees);
