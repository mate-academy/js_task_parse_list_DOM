'use strict';

// write code here
const list = document.querySelector('ul');

function getSalary(item) {
  return Number(item.dataset.salary.replace('$', '').replace(',', ''));
}

function sortList(employeeList) {
  const items = Array.from(employeeList.children);

  items.sort((item1, item2) => {
    return getSalary(item2) - getSalary(item1);
  });

  for (const item of items) {
    employeeList.append(item);
  }
}

function getEmployees(employeeList) {
  const result = [];
  const items = employeeList.children;

  for (const item of items) {
    result.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: getSalary(item),
      age: Number(item.dataset.age),
    });
  }

  return result;
}

sortList(list);
getEmployees(list);
