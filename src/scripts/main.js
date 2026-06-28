'use strict';

// write code here
const list = document.querySelector('ul');

sortList(list);
getEmployees(list);

function getSalary(salary) {
  return Number(salary.replace('$', '').replaceAll(',', ''));
}

function sortList(employeeList) {
  const items = [...employeeList.children];

  items.sort(
    (a, b) => getSalary(b.dataset.salary) - getSalary(a.dataset.salary),
  );

  employeeList.append(...items);
}

function getEmployees(employeeList) {
  return [...employeeList.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}
