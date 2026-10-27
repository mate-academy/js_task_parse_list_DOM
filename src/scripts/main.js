'use strict';

// write code here

function getSalary(salaryString) {
  return Number(salaryString.dataset.salary.replace(/[$,]/g, ''));
}

function sortList(listObj) {
  const items = [...listObj.children].sort(
    (a, b) => getSalary(b) - getSalary(a),
  );

  listObj.append(...items);
}

function getEmployees(listObj) {
  return [...listObj.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalary(item),
    age: Number(item.dataset.age),
  }));
}

const objs = document.querySelector('ul');

sortList(objs);

getEmployees(objs);
