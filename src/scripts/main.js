'use strict';

const list = document.querySelector('ul');

const sortList = (list) => {
  const listItems = [...list.querySelectorAll('li')];

  const getSalary = (item) => {
    return Number(item.dataset.salary.replace(/[\$,]/g, ''));
  };

  listItems.sort((a, b) => getSalary(b) - getSalary(a));

  listItems.forEach((item) => list.appendChild(item));
};

sortList(list);

const getEmployees = (list) => {
  const employees = [];
  const li = [...list.querySelectorAll('li')];

  li.forEach((item) => {
    const employee = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: Number(item.dataset.salary.replace(/[\$,]/g, '')),
      age: Number(item.dataset.age),
    };

    employees.push(employee);
  });

  return employees;
};

getEmployees(list);
