'use strict';

const listOfEmployees = document.querySelector('ul');

function sortList(list) {
  const sortedEmployees = [];

  function toNumber(employee) {
    employee.dataset.salary = employee.dataset.salary
      .replace('$', '')
      .replace(',', '');

    sortedEmployees.push(employee);
  }

  [...list.children].map(toNumber);

  sortedEmployees.sort((emloyeeA, employeeB) =>
    employeeB.dataset.salary - emloyeeA.dataset.salary);

  list.append(...sortedEmployees);
};

function getEmployees(list) {
  const employees = [];

  [...list.children].map(employee => employees.push({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  })
  );

  return employees;
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
