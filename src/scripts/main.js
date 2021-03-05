'use strict';

// write code here
const employeeList = document.body.querySelector('ul');
const employees = [...document.body.querySelectorAll('li')];

function convertStringtoNumber(string) {
  return +(string.replace(/[$,]/gm, ''));
}

function sortList(list) {
  list.sort((currentEmployee, nextEmployee) => {
    return convertStringtoNumber(nextEmployee.dataset.salary)
    - convertStringtoNumber(currentEmployee.dataset.salary);
  });
}

function getEmployees(list) {
  return list.map(employee => {
    const employeeProfile = {};

    employeeProfile.name = employee.innerText;
    employeeProfile.position = employee.dataset.position;
    employeeProfile.salary = employee.dataset.salary;
    employeeProfile.age = employee.dataset.age;

    return employeeProfile;
  });
}

sortList(employees);

employeeList.append(...employees);

getEmployees(employees);
