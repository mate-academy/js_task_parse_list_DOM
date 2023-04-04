'use strict';

// write code here

const employees = document.querySelector('ul');

function convertStringToNumber(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

function sortList(list) {
  const people = Array.from(list.children);

  people.sort((a, b) => {
    const salaryA = convertStringToNumber(a.dataset.salary);
    const salaryB = convertStringToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });
  people.forEach(person => list.appendChild(person));
}

function getEmployees(list) {
  sortList(list);

  const sortedEmployees = Array
    .from(list.children)
    .map(employee => {
      const employeeName = employee.textContent;
      const employeePosition = employee.dataset.position;
      const employeeSalary = Number(employee.dataset.salary);
      const employeeAge = Number(employee.dataset.age);

      return {
        employeeName, employeePosition, employeeSalary, employeeAge,
      };
    });

  return sortedEmployees;
}

getEmployees(employees);
