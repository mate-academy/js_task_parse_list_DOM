'use strict';

function sortList(employees) {
  const sortedEmployeesList = Object.values(employees).sort(
    (firstEmployee, secondEmployee) => {
      return parseNumber(firstEmployee) - parseNumber(secondEmployee);
    },
  );

  return sortedEmployeesList;
}

function parseNumber(employee) {
  let salary = employee.dataset.salary;

  salary = salary.replaceAll('$', '');
  salary = salary.replaceAll(',', '');

  return parseInt(salary);
}

function changeEmployeesOrder(employees) {
  const ulElement = document.querySelector('ul');

  for (const nodeEmployee of employees) {
    ulElement.prepend(nodeEmployee);
  }
}

const employeesElements = document.querySelectorAll('ul li');
const sortedEmployees = sortList(employeesElements);

changeEmployeesOrder(sortedEmployees);
