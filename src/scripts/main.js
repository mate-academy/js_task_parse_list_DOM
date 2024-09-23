'use strict';

const employees = Array.from(document.querySelectorAll('li'));

function getNumberFromString(str) {
  return parseInt(str.dataset.salary.split(',').join('').split('$').join(''));
}

function getSortedEmployeeslist(list) {
  const employeeList = document.querySelector('ul');

  list
    .sort((e1, e2) => {
      const e1Salary = getNumberFromString(e1);
      const e2Salary = getNumberFromString(e2);

      return e2Salary - e1Salary;
    })
    .forEach((employee) => {
      employeeList.appendChild(employee);
    });
}

function getEmployeesList(list) {
  return list.map((employee) => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

getSortedEmployeeslist(employees);
getEmployeesList(employees);
