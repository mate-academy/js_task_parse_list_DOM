'use strict';

const list = document.querySelector('ul');

function convertSalaryToNumber(salaryString) {
  return parseInt(salaryString.replace('$', '').replace(/,/g, ''), 10);
}

function sortList() {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.getAttribute('data-salary'));
    const salaryB = convertSalaryToNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  listItems.forEach((item) => {
    list.appendChild(item);
  });
}

function getEmployees() {
  const employees = [];

  const listItems = Array.from(list.children);

  listItems.forEach((item) => {
    const first = item.textContent.trim();
    const position = item.getAttribute('data-position');
    const salary = convertSalaryToNumber(item.getAttribute('data-salary'));
    const age = parseInt(item.getAttribute('data-age'), 10);

    const employee = {
      first,
      position,
      salary,
      age,
    };

    employees.push(employee);
  });

  return employees;
}

getEmployees(list);

sortList(list);
