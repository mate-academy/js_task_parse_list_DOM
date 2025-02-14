'use strict';

// write code here
const employees = document.querySelectorAll('li');

sortEmployees();
getAtributesEmployee();

function sortEmployees() {
  const sortedEmployees = Array.from(employees).sort((a, b) => {
    const salaryA = parseFloat(
      a.getAttribute('data-salary').replace(/[$,]/g, ''),
    );
    const salaryB = parseFloat(
      b.getAttribute('data-salary').replace(/[$,]/g, ''),
    );

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  sortedEmployees.forEach((employee) => {
    ul.appendChild(employee);
  });
}

function getAtributesEmployee() {
  const objEmployees = [];

  for (let i = 0; i < employees.length; i++) {
    objEmployees.push({
      name: employees[i].textContent.trim(),
      position: employees[i].dataset.position,
      salary: employees[i].dataset.salary,
      age: employees[i].dataset.age,
    });
  }

  return objEmployees;
}
