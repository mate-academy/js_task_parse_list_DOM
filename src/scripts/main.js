'use strict';

const listOfEmployees = document.querySelectorAll('li');
const employeeList = document.querySelector('ul');

function sortList(employees) {
  const employeesArray = [];

  for (let i = 0; i < employees.length; i++) {
    const employeesName = employees[i].textContent;
    const strToNumber = employees[i].dataset.salary;
    const position = employees[i].dataset.position;
    const age = employees[i].dataset.age;
    const toNumber = parseFloat(strToNumber.replace(/[$,]/g, ''));

    employeesArray.push({
      name: employeesName,
      position,
      salary: toNumber,
      age,
      element: employees[i],
    });
  }

  const sortedAllSelaries = employeesArray.sort((a, b) => b.salary - a.salary);

  return sortedAllSelaries;
}

function getEmployees(sortedEmployees) {
  employeeList.innerHTML = '';

  sortedEmployees.forEach((employee) => {
    employeeList.appendChild(employee.element);
  });
}

const allSalaries = sortList(listOfEmployees);

getEmployees(allSalaries);
