'use strict';

const getSalaryValue = (item) => Number(item.dataset.salary.replace(/\D/g, ''));

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => {
    return getSalaryValue(b) - getSalaryValue(a);
  });

  list.append(...items);
}

function getEmployees(list) {
  const items = [...list.children];

  const getObjectEmployee = (item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: getSalaryValue(item),
      age: Number(item.dataset.age),
    };
  };

  const rightObjectEmployees = items.map(getObjectEmployee);

  return rightObjectEmployees;
}

const listEmployee = document.querySelector('ul');

sortList(listEmployee);
getEmployees(listEmployee);
