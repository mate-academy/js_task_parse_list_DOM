'use strict';

function convertSalaryToNumber(salaryString) {
  return parseInt(salaryString.replace(/[^\d]/g, ''));
}

function sortList(listProperty = '') {
  const list = document.querySelectorAll(`[data-${listProperty}]`);

  const sortedList = Array.from(list).sort((a, b) => {
    const salaryA = convertSalaryToNumber(
      a.getAttribute(`data-${listProperty}`),
    );
    const salaryB = convertSalaryToNumber(
      b.getAttribute(`data-${listProperty}`),
    );

    return salaryB - salaryA;
  });

  sortedList.forEach((item) => {
    document.querySelector('ul').appendChild(item);
  });
}

function getEmployees(listProperty = '') {
  const list = document.querySelectorAll(`[data-${listProperty}]`);

  return Array.from(list).map((item) => ({
    name: item.textContent,
    position: item.getAttribute('data-position'),
    salary: convertSalaryToNumber(item.getAttribute('data-salary')),
    age: +item.getAttribute('data-age'),
  }));
}

sortList('salary');

const employeesArray = getEmployees('salary');

// eslint-disable-next-line no-console
console.log(employeesArray);
