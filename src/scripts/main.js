'use strict';

const list = [...document.querySelectorAll('[data-salary]')];

const getSalaryValue = (employee) => {
  return parseInt(
    employee.getAttribute('data-salary').slice(1).replaceAll(',', ''),
  );
};

const sortList = (employees) => {
  employees.sort((a, b) => getSalaryValue(b) - getSalaryValue(a));

  employees.forEach((item) => {
    document.querySelector('ul').appendChild(item);
  });
};

const getEmployees = (employees) => {
  return employees.map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: getSalaryValue(item),
    age: +item.getAttribute('data-age'),
  }));
};

sortList(list);
getEmployees(list);
