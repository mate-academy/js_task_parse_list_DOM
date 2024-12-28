'use strict';

function getEmployees() {
  const employeeList = [];
  const employeeListElements = document.querySelectorAll('li');

  for (const employeeElement of employeeListElements) {
    const employee = {};

    employee.name = employeeElement.innerText;
    employee.position = employeeElement.dataset.position;

    employee.salary = +employeeElement.dataset.salary
      .replaceAll(',', '')
      .replace('$', '');
    employee.age = +employeeElement.dataset.age;

    employeeList.push(employee);
  }

  return employeeList;
}

function sortEmployees() {
  const employees = getEmployees();

  employees.sort((employee1, employee2) => employee2.salary - employee1.salary);

  const listElement = document.querySelector('ul');
  const fragment = document.createDocumentFragment();

  for (const employee of employees) {
    const listItem = document.createElement('li');

    listItem.textContent = employee.name;
    listItem.dataset.position = employee.position;
    listItem.dataset.salary = `$${employee.salary.toLocaleString()}`;
    listItem.dataset.age = employee.age;

    fragment.appendChild(listItem);
  }

  listElement.innerHTML = '';
  listElement.appendChild(fragment);
}

sortEmployees();
