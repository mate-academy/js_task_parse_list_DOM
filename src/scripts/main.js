'use strict';

function parseSalary(salary) {
  return parseInt(salary.replace(/[^0-9]/g, ''), 10);
}

function sortList(list) {
  const sortedList = Array.from(list).sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  ul.innerHTML = '';
  sortedList.forEach((item) => ul.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: parseInt(item.dataset.age, 10),
  }));
}

const employeeList = document.querySelectorAll('li');

sortList(employeeList);

// eslint-disable-next-line no-unused-vars
const employees = getEmployees(employeeList);
