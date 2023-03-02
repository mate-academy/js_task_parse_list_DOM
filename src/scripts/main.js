'use strict';

const ullist = document.querySelector('ul');

function sortList(list) {
  const items = Array.from(list.children);
  const sortable = items.map((item) => ({
    element: item,
    salary: convertToNumber(item.dataset.salary),
  }));
  sortable.sort((a, b) => b.salary - a.salary);
  sortable.forEach(({ element }) => ullist.appendChild(element));
}

function convertToNumber(salaryString) {
  return parseFloat(salaryString.replace(/\$/g, ''));
}

function getEmployees(list) {
  const employees = Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: convertToNumber(item.dataset.salary),
    age: parseInt(item.dataset.age),
  }));

  return employees;
}

sortList(ullist);
getEmployees(ullist);
