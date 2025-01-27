'use strict';

// write code here
const list = document.body.querySelectorAll('li');

function getEmployees(employeesList) {
  const employees = [];

  for (let i = 0; i < employeesList.length; i++) {
    const employeeName = employeesList[i].innerHTML.trim();
    const salary = parseInt(
      employeesList[i].getAttribute('data-salary').replace(/[$,]/g, ''),
    );
    const position = employeesList[i].getAttribute('data-position');
    const age = employeesList[i].getAttribute('data-age');

    employees.push({
      employeeName,
      position,
      salary,
      age,
    });
  }

  return employees;
}

function sortList(employeesList) {
  return employeesList.sort((a, b) => b.salary - a.salary);
}

const unsortedEmployees = getEmployees(list);
const sortedEmployees = sortList(unsortedEmployees);

for (let i = 0; i < sortedEmployees.length; i++) {
  list[i].innerHTML = sortedEmployees[i].employeeName;
}
