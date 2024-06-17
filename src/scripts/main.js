'use strict';

const formatCurrencyToNumber = (value) => Number(value.replace(/[,$]/g, ''));

const sortList = (list) =>
  list.sort((a, b) => {
    const salaryA = a.getAttribute('data-salary');
    const salaryB = b.getAttribute('data-salary');

    const numberA = formatCurrencyToNumber(salaryA);
    const numberB = formatCurrencyToNumber(salaryB);

    if (numberA < numberB) {
      return 1;
    }

    return -1;
  });

const getEmployees = (list) =>
  list.map((element) => ({
    name: element.innerText,
    position: element.getAttribute('data-position'),
    salary: element.getAttribute('data-salary'),
    age: element.getAttribute('data-age'),
  }));

const employeesListItems = [...document.querySelectorAll('li')];
const sortedEmployeesList = sortList(employeesListItems);
const transformedList = getEmployees(sortedEmployeesList);

const listSelector = document.querySelector('ul');

listSelector.innerHTML = transformedList
  .map((employee) => {
    return `<li data-salary="${employee.salary}" data-position="${employee.position}" data-age="${employee.age}">${employee.name}</li>`;
  })
  .join('');
