'use strict';

const employeeList = document.querySelector('ul');

function getSalary(employeeElement) {
  const salary = employeeElement.dataset.salary;

  return Number(salary.replaceAll('$', '').replaceAll(',', ''));
}

function sortList(listElement) {
  const employeeItems = [...listElement.querySelectorAll('li')];

  employeeItems.sort((firstEmployee, secondEmployee) => {
    return getSalary(secondEmployee) - getSalary(firstEmployee);
  });

  employeeItems.forEach((employeeElement) => {
    listElement.append(employeeElement);
  });
}

function getEmployees(listElement) {
  const employeeItems = [...listElement.querySelectorAll('li')];

  return employeeItems.map((employeeElement) => ({
    name: employeeElement.textContent.trim(),
    position: employeeElement.dataset.position,
    salary: getSalary(employeeElement),
    age: Number(employeeElement.dataset.age),
  }));
}

sortList(employeeList);
getEmployees(employeeList);
