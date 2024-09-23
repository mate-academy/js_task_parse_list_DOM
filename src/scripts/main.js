'use strict';

const employees = document.querySelectorAll('li');
const ArrOfEmployees = [...document.querySelectorAll('li')];

function sortBySalary() {
  ArrOfEmployees.sort(
    (employeeA, employeeB) =>
      +employeeB.dataset.salary.replaceAll(/[$,]/g, '') -
      +employeeA.dataset.salary.replaceAll(/[$,]/g, ''),
  );

  for (let i = 0; i < employees.length; i++) {
    employees[i].outerHTML = ArrOfEmployees[i].outerHTML;
  }
}

function createObjects() {
  return ArrOfEmployees.map((employee) => ({
    name: employee.innerHTML.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortBySalary();
createObjects();
