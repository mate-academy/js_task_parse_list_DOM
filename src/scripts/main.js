'use strict';

const listElement = document.querySelector('ul');

function getSalaryValue(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const nodes = list.querySelectorAll('li[data-position]');

  const sortedArray = Array.from(nodes).sort((a, b) => {
    const salaryA = getSalaryValue(a.dataset.salary);
    const salaryB = getSalaryValue(b.dataset.salary);

    return salaryB - salaryA;
  });

  sortedArray.forEach((node) => list.append(node));
}

function getEmployees(list) {
  const nodes = list.querySelectorAll('li[data-position]');
  const employeeList = [];

  for (const employee of nodes) {
    employeeList.push({
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      // Використовуємо той самий helper для одноманітності даних
      salary: getSalaryValue(employee.dataset.salary),
      age: Number(employee.dataset.age),
    });
  }

  return employeeList;
}

getEmployees(listElement);
sortList(listElement);
