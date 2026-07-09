'use strict';

const employees = [];

document.querySelectorAll('[data-salary]').forEach((listItem) => {
  employees.push({
    name: listItem.textContent.trim(),
    position: listItem.dataset.position,
    salary: listItem.dataset.salary,
    age: listItem.dataset.age,
  });
});

employees.sort((a, b) => {
  return b.salary.replace(/[^0-9]/g, '') - a.salary.replace(/[^0-9]/g, '');
});

document.querySelectorAll('li[data-salary]').forEach((listItem, index) => {
  listItem.dataset.position = `${employees[index].position}`;
  listItem.dataset.salary = `$${employees[index].salary}`;
  listItem.dataset.age = `${employees[index].age}`;
  listItem.textContent = `${employees[index].name}`;
});
