'use strict';

const listOfEmployee = document.querySelectorAll('li');

function sortList(list) {
  const arrOfElements = Array.from(list);

  const sorted = arrOfElements.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  const employeeList = document.querySelector('ul');

  employeeList.innerHTML = '';

  sorted.forEach((item) => employeeList.appendChild(item));

  return employeeList;
}

function getEmployees(list) {
  const employees = [];

  for (const employee of list) {
    const employeeObj = {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: Number(employee.dataset.salary.replace(/[$,]/g, '')),
      age: Number(employee.dataset.age),
    };

    employees.push(employeeObj);
  }

  return employees;
}

getEmployees(listOfEmployee);
sortList(listOfEmployee);
