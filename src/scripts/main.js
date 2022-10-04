'use strict';

const hardWorkersList = [...document.querySelectorAll('[data-salary]')];

const salaryToNum = (item) =>
  Number(item.dataset.salary.replace(/[$,]/g, ''));

const sortList = (list) =>
  document.querySelector('ul')
    .append(...list.sort((a, b) => salaryToNum(b) - salaryToNum(a)));

const getEmployees = (list) =>
  list.map(e => ({
    name: e.innerText,
    position: e.getAttribute('data-position'),
    salary: e.getAttribute('data-salary'),
    age: e.getAttribute('data-age'),
  }));

sortList(hardWorkersList);
getEmployees(hardWorkersList);
