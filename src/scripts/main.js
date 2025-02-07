'use strict';

function sortList() {
  const list = [...document.querySelectorAll('ul > li')];

  list.sort((item, toCompare) => {
    const getFirstSalary = getSalary(item);
    const getSalaryToCompare = getSalary(toCompare);

    return getSalaryToCompare - getFirstSalary;
  });

  document.querySelector('ul').innerHTML = '';

  list.forEach((item) => {
    document.querySelector('ul').appendChild(item);
  });
}

function getSalary(item) {
  return item.getAttribute('data-salary').slice(1).replace(/,/g, '.');
}

function getEmployees() {
  const list = [...document.querySelectorAll('ul > li')];
  const employees = list.map((item) => {
    const employeeName = item.innerText;
    const position = item.getAttribute('data-position');
    const salary = item.getAttribute('data-salary');
    const age = item.getAttribute('data-age');

    return {
      employeeName,
      position,
      salary,
      age,
    };
  });

  return employees;
}

sortList();
getEmployees();
