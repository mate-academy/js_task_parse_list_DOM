'use strict';

const list = document.querySelector('ul');

const sortList = (employees) => {
  const items = [...employees.children];

  items.sort((a, b) => {
    const salaryA = Number(a.getAttribute('data-salary').replace(/[$,]/g, ''));
    const salaryB = Number(b.getAttribute('data-salary').replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  employees.append(...items);
};

const getEmployees = (employees) => {
  return [...employees.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: Number(item.getAttribute('data-salary').replace(/[$,]/g, '')),
    age: Number(item.getAttribute('data-age')),
  }));
};

sortList(list);
getEmployees(list);
