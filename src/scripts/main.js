'use strict';

const list = document.querySelector('ul');

function sortList(listElement) {
  const sorted = Array.from(listElement.children).sort(
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

function getEmployees(listElement) {
  const employees = [];

  for (const element of listElement.children) {
    const obj = {
      name: element.textContent.trim(),
      position: element.dataset.position,
      salary: getSalary(element),
      age: Number(element.dataset.age),
    };

    employees.push(obj);
  }

  return employees;
}

sortList(list);
getEmployees(list);
