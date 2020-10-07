'use strict';

const employyes = [...document.querySelectorAll('li')];
const employyesList = document.querySelector('ul');

function sortList(list) {
  list.sort((prevEmp, curEmp) => {
    const salaryOfPrevEmp = parseInt(
      prevEmp.dataset.salary.slice(1).split(',').join('')
    );

    const salaryOfCurEmp = parseInt(
      curEmp.dataset.salary.slice(1).split(',').join('')
    );

    return salaryOfCurEmp - salaryOfPrevEmp;
  });

  employyesList.append(...employyes);
}

function getEmployees(list) {
  const employeeObjects = [];

  for (const employee of list) {
    const employeeInformation = {
      name: employee.innerHTML.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };

    employeeObjects.push(employeeInformation);
  }

  return employeeObjects;
}

sortList(employyes);
getEmployees(employyes);
