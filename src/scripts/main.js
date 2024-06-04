'use strict';

const employeeElements = document.querySelectorAll('li');
const employeeList = document.querySelector('ul');

function parseSalary(str) {
  return str.replace('$', '').split(',').join('');
}

function sortList(list) {
  return Array.from(list).sort((a, b) => {
    const employeeASalary = parseSalary(a.dataset.salary);
    const employeeBSalary = parseSalary(b.dataset.salary);

    return employeeBSalary - employeeASalary;
  });
}

function getEmployees(list) {
  const parsedEmployeeList = [];

  for (const employee of list) {
    const dataset = employee.dataset;

    const employeeName = employee.innerHTML.trim();
    const employeePosition = dataset.position;
    const employeeSalary = parseSalary(dataset.salary);
    const employeeAge = parseInt(dataset.age);

    parsedEmployeeList.push({
      employeeName,
      employeePosition,
      employeeSalary,
      employeeAge,
    });
  }

  return parsedEmployeeList;
}

employeeList.innerHTML = null;
employeeList.replaceChildren(...sortList(employeeElements));

getEmployees(employeeElements);
