'use strict';

const employeeList = document.querySelector('ul');

function getSalary(employeeElement) {
  const salary = employeeElement.getAttribute('data-salary');

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
    position: employeeElement.getAttribute('data-position'),
    salary: getSalary(employeeElement),
    age: Number(employeeElement.getAttribute('data-age')),
  }));
}

sortList(employeeList);
getEmployees(employeeList);
