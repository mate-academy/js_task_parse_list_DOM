'use strict';

const employeeList = document.querySelector('ul');

function convertToNumber(salaryStr) {
  return parseInt(salaryStr.replace(/[$,]/g, '', 10));
}

function sortList(list) {
  const sortedItems = Array.from(list.children).sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHtml = '';

  sortedItems.forEach((item) => {
    list.appendChild(item);
  });
}

function getEmployees(list) {
  const employees = Array.from(list.children).map((item) => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: convertToNumber(item.dataset.salary),
    age: parseInt(item.dataset.age, 10),
  }));

  return employees;
}

sortList(employeeList);
getEmployees(employeeList);
