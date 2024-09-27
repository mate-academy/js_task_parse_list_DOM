/* eslint-disable no-console */
'use strict';

const workersList = [...document.querySelectorAll('[data-salary]')];

const salaryToNum = (item) =>
  Number(item.dataset.salary.replace(/[$,]/g, ''));

const sortList = (list) =>
  document.querySelector('ul')
    .append(...list.sort((a, b) => salaryToNum(b) - salaryToNum(a)));

const getEmployees = (list) =>
  list.map(data =>
    ({
      name: data.innerText,
      position: data.getAttribute('data-position'),
      salary: data.getAttribute('data-salary'),
      age: data.getAttribute('data-age'),
    }));

sortList(workersList);
getEmployees(workersList);
