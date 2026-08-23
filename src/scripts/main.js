'use strict';

const employeeListElement = document.querySelector('ul');

function sortList(list) {
  const employees = [...list.children];

  employees.sort(
    ({ dataset: { salary: salary1 } }, { dataset: { salary: salary2 } }) => {
      return convertToNumber(salary2) - convertToNumber(salary1);
    },
  );

  employees.forEach((employee) => {
    list.append(employee);
  });
}

function convertToNumber(string) {
  return string.slice(1).split(',').join('');
}

function getEmployees(list) {
  const employees = [...list.children];
  const result = [];

  employees.forEach((employee) => {
    result.push({
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    });
  });

  return result;
}

sortList(employeeListElement);
getEmployees(employeeListElement);
