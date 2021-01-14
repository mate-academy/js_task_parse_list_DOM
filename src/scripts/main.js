'use strict';

const lis = [...document.querySelectorAll('li')]
  .sort((a, b) => getSalaryFromDataset(b) - getSalaryFromDataset(a));

const parentNode = lis[0].parentNode;

lis.forEach(e => parentNode.removeChild(e));
lis.forEach(e => parentNode.appendChild(e));

getEmployees(lis);

function getSalaryFromDataset(dataset) {
  return +dataset.dataset.salary
    .substr(1)
    .replaceAll(',', '');
}

function getEmployees(list) {
  const employees = [];

  list.forEach(e => {
    employees.push({
      name: e.textContent.trim(),
      position: e.dataset.position,
      salary: e.dataset.salary,
      age: e.dataset.age,
    });
  });

  return employees;
}
