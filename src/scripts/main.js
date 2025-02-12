'use strict';

function createEmployeeObject(liElement) {
  const employeeName = liElement.textContent;
  const position = liElement.dataset.position;
  const salary = parseSalary(liElement.dataset.salary);
  const age = liElement.dataset.age;

  return {
    employeeName,
    position,
    salary,
    age,
  };
}

function sortEmployeesBySalaries(employees) {
  return employees.sort((a, b) => b.salary - a.salary);
}

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

function displaySortedEmployees(employeesInOrder) {
  const ulElement = document.querySelector('ul');

  ulElement.innerHTML = '';

  employeesInOrder.forEach((element) => {
    const liElement = document.createElement('li');

    liElement.textContent = `${element.employeeName}`;

    ulElement.appendChild(liElement);
  });
}

const listOfEmployees = document.querySelectorAll('ul li');

const arrayOfEmployees = Array.from(listOfEmployees);

const employeesObjects = arrayOfEmployees.map(createEmployeeObject);
const sortedEmployees = sortEmployeesBySalaries(employeesObjects);

displaySortedEmployees(sortedEmployees);
