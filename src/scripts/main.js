'use strict';

// write code here

const employees = document.getElementsByTagName('li');

function sortList(toBeSorted) {
  const employeesArray = [...toBeSorted].sort((a, b) =>
    b.dataset.salary.substring(1).replaceAll(',', '')
  - a.dataset.salary.substring(1).replaceAll(',', ''));

  const StartPoint = document.getElementsByTagName('ul');

  for (let i = 0; i < employeesArray.length; i++) {
    StartPoint[0].append(employeesArray[i]);
  }
}

sortList(employees);

function getEmployees(list) {
  const employeesList = [];

  for (let i = 0; i < list.length; i++) {
    const employee = {};

    employee.name = list[i].lastChild.textContent.trim();
    employee.position = list[i].dataset.position;
    employee.salary = list[i].dataset.salary;
    employee.age = list[i].dataset.age;
    employeesList.push(employee);
  }

  return employeesList;
}

getEmployees(employees);
