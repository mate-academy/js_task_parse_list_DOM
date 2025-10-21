'use strict';

// write code here
function convertSalary(salaryStr) {
  const salary = String(salaryStr).replace(/\D/g, '');

  return Number(salary) || 0;
}

function sortList(listElement) {
  const employeeArr = [];
  const employeesList = listElement.children;

  for (const employee of employeesList) {
    const userSalary = employee.dataset.salary;

    employeeArr.push([convertSalary(userSalary), employee]);
  }

  const sortedEmployees = employeeArr.sort(
    (a, b) => Number(b[0]) - Number(a[0]),
  );

  const arrSortedEmployees = () => {
    const arrToReturn = [];

    for (const employee of sortedEmployees) {
      arrToReturn.push(employee[1]);
    }

    return arrToReturn;
  };

  const sortedArr = arrSortedEmployees();

  if (sortedArr[0].parentElement) {
    const parentObj = sortedArr[0].parentElement;

    parentObj.innerHTML = '';

    for (const employeeHtml of arrSortedEmployees()) {
      parentObj.appendChild(employeeHtml);
    }
  }
}

function getEmployees(listElement) {
  const parsedEmployeeArr = [];
  const employeesList = listElement.children;

  for (const employee of employeesList) {
    const objToAdd = {};

    objToAdd['name'] = employee.textContent;
    objToAdd['position'] = employee.dataset.position;
    objToAdd['salary'] = convertSalary(employee.dataset.salary);
    objToAdd['age'] = employee.dataset.age;

    parsedEmployeeArr.push(objToAdd);
  }

  return parsedEmployeeArr;
}

const employeeList = document.querySelector('ul');

sortList(employeeList);

const sortedEmployeeList = document.querySelector('ul');

getEmployees(sortedEmployeeList);
