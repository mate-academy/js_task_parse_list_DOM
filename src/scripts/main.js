'use strict';

// write code here

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

function sortList(employeeList) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(employeeList) {
  const items = Array.from(list.children);

  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
