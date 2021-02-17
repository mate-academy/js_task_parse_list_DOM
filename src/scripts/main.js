'use strict';

const employeesItems = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

function sortList(list) {
  return list.sort(compareSalaries);
}
employeesList.append(...sortList(employeesItems));

function getEmployees(employees) {
  const employeesObject = employees;

  if (!employeesObject) {
    return;
  }

  const employeesObjectsList = employeesObject.map(function(employee) {
    const employeeObj = {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };

    return employeeObj;
  });

  return employeesObjectsList;
}

function compareSalaries(firstEmploye, secondEmploye) {
  const firstEmployeSalary = parseFloat(firstEmploye.dataset.salary.slice(1));
  const secondEmployeSalary = parseFloat(secondEmploye.dataset.salary.slice(1));

  return secondEmployeSalary - firstEmployeSalary;
}

sortList(employeesItems);
getEmployees(employeesItems);
