'use strict';

const employeesList = Array.from(document.querySelectorAll('li'));

function sortList(list) {
  const sortedEmployees = list.sort((a, b) => {
    return salaryFromElement(b) - salaryFromElement(a);
  });

  sortedEmployees.forEach((employee) => {
    document.querySelector('ul').appendChild(employee);
  });
}

function getEmployees(list) {
  const employees = [];

  list.forEach((employee) => {
    employees.push({
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: salaryFromElement(employee),
      age: parseInt(employee.dataset.age),
    });
  });

  return employees;
}

function salaryFromElement(el) {
  return parseInt(el.dataset.salary.replace('$', '').replaceAll(',', ''));
}

sortList(employeesList);
getEmployees(employeesList);
