'use strict';

function convertSalaryToNumber(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

function sortList(listProperty) {
  const list = document.querySelectorAll(`[${listProperty}]`);

  const sortedList = Array.from(list).sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.getAttribute(listProperty));
    const salaryB = convertSalaryToNumber(b.getAttribute(listProperty));

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  sortedList.forEach(item => ul.appendChild(item));
}

function getEmployees(listProperty) {
  const list = document.querySelectorAll(`[${listProperty}]`);

  const employees = Array.from(list).map(item => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: convertSalaryToNumber(item.getAttribute(listProperty)),
    age: parseInt(item.getAttribute('data-age')),
  }));

  return employees;
}

sortList('data-salary');

getEmployees('data-salary');
