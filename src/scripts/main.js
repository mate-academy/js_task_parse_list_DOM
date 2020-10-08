'use strict';

const employyes = [...document.querySelectorAll('li')];
const employyesList = document.querySelector('ul');

function sortList(list) {
  list.sort((previousEmployee, currentEmployee) => {
    const salaryOfPreviousEmployee = parseInt(
      previousEmployee.dataset.salary.slice(1).split(',').join('')
    );

    const salaryOfCurrentEmployee = parseInt(
      currentEmployee.dataset.salary.slice(1).split(',').join('')
    );

    return salaryOfCurrentEmployee - salaryOfPreviousEmployee;
  });

  employyesList.append(...employyes);
}

function getEmployees(list) {
  const employeeObjects = [];

  for (const employee of list) {
    const employeeInformation = {
      name: employee.innerHTML.trim(),
      ...employee.dataset,
    };

    employeeObjects.push(employeeInformation);
  }

  return employeeObjects;
}

sortList(employyes);
getEmployees(employyes);
