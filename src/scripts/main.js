'use strict';

const list = document.querySelector('ul');

function sortList(list) {
  const sorted = Array.from(list.children).sort(
    (a, b) => getSalary(b) - getSalary(a),
  );

  list.innerHTML = '';
  list.append(...sorted);

  return sorted;
}

function getSalary(el) {
  const salaryStr = el.dataset.salary;
  const cleaned = salaryStr.replace(/\$|,/g, '');

  return Number(cleaned);
}

function getEmployees(list) {
  const employees = [];

  for (const element of list.children) {
    const obj = {
      name: element.dataset.name,
      position: element.dataset.position,
      salary: getSalary(element),
      age: Number(element.dataset.age),
    };

    employees.push(obj);
  }

  return employees;
}

sortList(list);

const employees = getEmployees(list);
getEmployees(list);
