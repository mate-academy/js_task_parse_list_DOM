'use strict';

// write code here

const getEmployees = () => {
  const items = [...document.querySelectorAll('li[data-salary]')];

  return items.map((item) => ({
    element: item,
    salary: parseFloat(item.dataset.salary.replace(/[^0-9.-]+/g, '')),
  }));
};

const sortList = () => {
  const list = document.querySelector('ul');
  const employees = getEmployees();

  employees.sort((a, b) => b.salary - a.salary);

  employees.forEach((obj) => list.appendChild(obj.element));
};

sortList();
