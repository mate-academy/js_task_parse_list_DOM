'use strict';

const employesList = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

const getFormatString = (stringToFormat) => {
  return stringToFormat
    .split('$')
    .join('')
    .split(',')
    .join('');
};

function sortList(list) {
  [...list].sort((current, next) => {
    const formattedSalaryCurrent = getFormatString(current.dataset.salary);
    const formattedSalaryNext = getFormatString(next.dataset.salary);

    return Number(formattedSalaryNext) - Number(formattedSalaryCurrent);
  }).forEach(item => ul.append(item));
}

function getEmployees(list) {
  return list.map(item => {
    const employeeData = {};

    employeeData['name'] = item.innerText;
    employeeData['position'] = item.dataset.position;
    employeeData['salary'] = item.dataset.salary;
    employeeData['age'] = item.dataset.age;

    return employeeData;
  });
}

sortList(employesList);
getEmployees(employesList);
