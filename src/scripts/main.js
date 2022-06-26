'use strict';

function convertSalaryToNumber(salary) {
  return +salary.split('$')[1].split(',').join('');
}

function sortList(htmlList) {
  const employeesList = [...htmlList.children];

  employeesList.sort((first, second) => (
    convertSalaryToNumber(second.dataset.salary)
    - convertSalaryToNumber(first.dataset.salary)
  ));

  htmlList.innerHTML = '';

  for (let i = 0; i < employeesList.length; i++) {
    htmlList.append(employeesList[i]);
  }
}

function getEmployees(htmlList) {
  const employeesList = [...htmlList.children];
  const employeesArray = [];

  for (let i = 0; i < employeesList.length; i++) {
    const currentInEmployeesList = employeesList[i];

    const employeeObj = {
      name: currentInEmployeesList.innerText,
      position: currentInEmployeesList.dataset.position,
      salary: currentInEmployeesList.dataset.salary,
      age: currentInEmployeesList.dataset.age,
    };

    employeesArray.push(employeeObj);
  }

  return employeesArray;
}

const list = document.querySelector('ul');

sortList(list);

getEmployees(list);
