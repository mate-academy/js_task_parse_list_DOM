'use strict';

const list = document.querySelector('ul');

const parseSalary = (salary) => Number(salary.replace(/[$,]/g, ''));

const sortList = (employees) => {
  const items = [...employees.children];

  items.sort((a, b) => {
    return (
      parseSalary(b.getAttribute('data-salary')) -
      parseSalary(a.getAttribute('data-salary'))
    );
  });

  employees.append(...items);
};

const getEmployees = (employees) => {
  return [...employees.children].map((item) => ({
    name: item.dataset.name || item.getAttribute('data-name'),
    position: item.getAttribute('data-position'),
    salary: parseSalary(item.getAttribute('data-salary')),
    age: Number(item.getAttribute('data-age')),
  }));
};

sortList(list);
getEmployees(list);
