'use strict';

const liElements = [...document.querySelectorAll('li')];
const employees = getEmployees(liElements);
const sortedEmployees = sortList(employees);

for (let i = 0; i < document.querySelectorAll('li').length; i++) {
  document.querySelectorAll('li')[i].innerText = sortedEmployees[i].name;
}

function sortList(listOfEmployees) {
  return listOfEmployees.sort(
    (a, b) => parseSalary(b.salary) - parseSalary(a.salary)
  );
}

function parseSalary(salary) {
  return parseFloat(salary.replace(',', '').replace('$', ''));
}

function getEmployees(listOfEmployees) {
  const result = [];

  for (const employee of listOfEmployees) {
    result.push({
      'name': employee.innerText,
      'position': employee.getAttribute('data-position'),
      'salary': employee.getAttribute('data-salary'),
      'age': employee.getAttribute('data-age'),
    });
  }

  return result;
}
