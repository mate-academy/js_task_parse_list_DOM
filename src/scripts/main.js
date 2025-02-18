'use strict';

const nativeList = document.querySelector('ul');

function getEmployees(list) {
  return Array.from(list).map((item) => ({
    element: item,
    salary: formatSalary(item.dataset.salary),
  }));
}

function sortList(employees) {
  return employees.sort((a, b) => b.salary - a.salary);
}

function formatSalary(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

const sortedEmployees = sortList(getEmployees(nativeList.children));

nativeList.innerHTML = '';
sortedEmployees.forEach((employee) => nativeList.appendChild(employee.element));
