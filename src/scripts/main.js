'use strict';

// write code here

function convertSalaryToNumber(salaryStr) {
  return Number(salaryStr.replace(/[^0-9.-]+/g, ''));
}

function sortList(listElement) {
  const itemsArray = Array.from(listElement.children);

  itemsArray.sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.getAttribute('data-salary'));
    const salaryB = convertSalaryToNumber(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  itemsArray.forEach((item) => listElement.appendChild(item));
}

function getEmployees(listElement) {
  const employees = [];

  Array.from(listElement.children).forEach((item) => {
    const employee = {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: convertSalaryToNumber(item.getAttribute('data-salary')),
      age: parseInt(item.getAttribute('data-age'), 10),
    };

    employees.push(employee);
  });

  return employees;
}

function displayEmployees(employees, listElement) {
  listElement.innerHTML = '';

  employees.forEach((employee) => {
    const li = document.createElement('li');

    li.textContent = employee.name;
    listElement.appendChild(li);
  });
}

const list = document.querySelector('ul');

sortList(list);

const employeesArray = getEmployees(list);

// Display only the names of the sorted employees
displayEmployees(employeesArray, list);
