'use strict';

const container = document.querySelector('ul');
const listOfEmployees = document.querySelectorAll('li');

const arrayListOfEmployees = [...listOfEmployees];

function convertIntoNumber(arrayWithStrings) {
  const removeSign = arrayWithStrings.replace(',', '');
  const arrayWithNumrers = Number(removeSign.slice(1));

  return arrayWithNumrers;
}

function sortList(list) {
  const sortSalaries = list.sort((a, b) => {
    const arg1 = a.getAttribute('data-salary');
    const arg2 = b.getAttribute('data-salary');

    return convertIntoNumber(arg2) - convertIntoNumber(arg1);
  });

  for (let i = 0; i < sortSalaries.length; i++) {
    container.append(sortSalaries[i]);
  }
}

function getEmployees(list) {
  const workers = arrayListOfEmployees.map(item => {
    const employee = {};

    employee.name = item.innerText;
    employee.position = item.getAttribute('data-position');
    employee.salary = item.getAttribute('data-salary');
    employee.age = item.getAttribute('data-age');

    return employee;
  });

  return workers;
}

sortList(arrayListOfEmployees);
getEmployees(arrayListOfEmployees);
