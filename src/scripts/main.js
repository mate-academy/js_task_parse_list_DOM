'use strict';

const listEmployees = document.querySelector('ul');
const items = Array.from(listEmployees.querySelectorAll('li'));

function sortList(listItems) {
  const sortedItems = listItems.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  listEmployees.innerHTML = '';
  sortedItems.forEach((item) => listEmployees.appendChild(item));
}

function getEmployees(listItems) {
  const employees = [];

  for (const item of listItems) {
    const objItem = {
      name: item.textContent,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    employees.push(objItem);
  }

  return employees;
}

sortList(items);
getEmployees(items);
// write code here
