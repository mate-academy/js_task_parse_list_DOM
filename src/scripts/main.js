'use strict';

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) =>
    (+b.dataset.salary.replace(/\D/g, ''))
    - (+a.dataset.salary.replace(/\D/g, ''))
  );

  items.map(item => list.append(item));

  return items;
}

function getEmployees(list) {
  const items = [...list.children];
  const employees = [];

  items.forEach(item => {
    const employee = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    employees.push(employee);
  });

  return employees;
}

sortList(document.querySelector('ul'));
getEmployees(document.querySelector('ul'));
