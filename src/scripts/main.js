'use strict';
'use strict';

const employeesList = document.body.querySelector('ul');

function sortList(list) {
  const employeesArray = [...list.querySelectorAll('li')];

  employeesArray.sort((a, b) => {
    return toNumber(b.dataset.salary) - toNumber(a.dataset.salary);
  });

  employeesArray.forEach((emp) => employeesList.append(emp));
}

function toNumber(string) {
  return Number(string.split('$').join('').split(',').join(''));
}

sortList(employeesList);

function getEmployees(list) {
  const employeesArray = list.querySelectorAll('li');

  const employees = [...employeesArray].map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });

  return employees;
}

/* eslint-disable */
const newList = getEmployees(employeesCount);

getEmployees(employeesCount);
