'use strict';

const employeesList = document.querySelector('ul');

function parseSalary(salaryString) {
  return parseInt(salaryString.replace(/\D/g, ''), 10);
}

function sortList() {
  const sortedItems = Array.from(employeesList.children).sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  sortedItems.forEach((item) => employeesList.appendChild(item));
}

function getEmployees() {
  const result = [];

  employeesList.querySelectorAll('li').forEach((item) => {
    result.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: item.dataset.age,
    });
  });

  return result;
}

sortList();
getEmployees();
