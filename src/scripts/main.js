'use strict';

const list = document.querySelector('ul');

function sortList(data) {
  const listItems = [...data.children];

  listItems
    .sort((a, b) => b.dataset.salary.localeCompare(
      a.dataset.salary, 'en', { numeric: true }));

  listItems.forEach(employee => data.append(employee));
}

function getEmployees(data) {
  return [...data.children].map(employee => {
    const { dataset: { position, salary, age } } = employee;

    return {
      name: employee.innerText,
      position,
      salary,
      age,
    };
  });
}

sortList(list);
getEmployees(list);
