'use strict';

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const listItems = Array.from(list.children);
  const sortedItems = listItems.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = ''; // Clear all children

  sortedItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim() || 'Unknown',
    position: item.dataset.position || 'Unknown',
    salary: parseFloat(item.dataset.salary) || 0,
    age: parseFloat(item.dataset.age) || null,
  }));
}

const employeeList = document.querySelector('ul');

sortList(employeeList);
getEmployees(employeeList);
