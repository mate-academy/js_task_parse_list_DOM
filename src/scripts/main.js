'use strict';

// write code here
const collectionOfEmployeesElements = document.body.querySelectorAll('li');
const employeeListElement = document.body.querySelector('ul');
const arrayOfEmployeesElements = [...collectionOfEmployeesElements];

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
  const arrayOfEmployeesProfiels = list
    .map(employee => {
      const employeeProfile = {};

      employeeProfile.name = employee.innerText;
      employeeProfile.position = employee.dataset.position;
      employeeProfile.salary = employee.dataset.salary;
      employeeProfile.age = employee.dataset.age;

      return employeeProfile;
    });

  return arrayOfEmployeesProfiels;
}

sortList(arrayOfEmployeesElements);

employeeListElement.append(...arrayOfEmployeesElements);

getEmployees(arrayOfEmployeesElements);
