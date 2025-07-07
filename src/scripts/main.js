'use strict';

const salaryList = document.querySelector('ul');

function sortList(list) {
  const items = list.querySelectorAll('li');
  const itemsArray = Array.from(items);

  itemsArray.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  itemsArray.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const allItems = list.querySelectorAll('li');

  const employees = [];

  allItems.forEach((item) => {
    const employee = {
      name: item.textContent.trim(),
      salary: Number(item.dataset.salary.replace(/[$,]/g, '')),
      age: Number(item.dataset.age),
      position: item.dataset.position,
    };

    employees.push(employee);
  });

  return employees;
}

sortList(salaryList);

getEmployees(salaryList);

// write code here
