'use strict';

const employeesList = document.querySelector('ul');

function formatSalary(str) {
  return +str.slice(1).split(',').join('');
}

function sortList(list) {
  const sortedItems = [...list.children].sort((a, b) => {
    return formatSalary(b.dataset.salary) - formatSalary(a.dataset.salary);
  });

  list.innerHtml = '';
  list.append(...sortedItems);
}

function getEmployees(list) {
  const items = [...list.children];
  const result = [];

  for (const el of items) {
    result.push({
      name: el.innerText,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    });
  }

  return result;
}

sortList(employeesList);
getEmployees(employeesList);
