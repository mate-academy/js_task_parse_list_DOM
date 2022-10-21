'use strict';

const listItems = [...document.querySelectorAll('[data-salary]')];

const moneyToNumber = (worker) =>
  Number(worker.dataset.salary.replace(/[$,]/g, ''));

const sortList = (list) =>
  document.querySelector('ul')
    .append(...list.sort((a, b) => moneyToNumber(b) - moneyToNumber(a)));

const getEmployees = (list) =>
  list.map(data =>
    ({
      name: data.innerText,
      position: data.getAttribute('data-position'),
      salary: data.getAttribute('data-salary'),
      age: data.getAttribute('data-age'),
    }));

sortList(listItems);
getEmployees(listItems);
