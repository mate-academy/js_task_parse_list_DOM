'use strict';

function parseSalary(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList(ulElement) {
  const items = Array.from(ulElement.querySelectorAll('li'));

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  items.forEach((item) => ulElement.appendChild(item));
}

function getEmployees(ulElement) {
  return Array.from(ulElement.querySelectorAll('li')).map((item) => {
    const nameElement = item.querySelector('.name');

    return {
      name: nameElement ? nameElement.textContent.trim() : '',
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

const employeeList = document.querySelector('ul');

if (employeeList) {
  sortList(employeeList);
  getEmployees(employeeList);
}
