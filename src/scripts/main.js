'use strict';

// write code here

const employees = document.querySelectorAll('li');

function sortList(toBeSorted) {
  const employeesArray = [...toBeSorted].sort((a, b) =>
    b.dataset.salary.substring(1).replaceAll(',', '')
  - a.dataset.salary.substring(1).replaceAll(',', ''));

  const StartPoint = document.querySelector('ul');

  employeesArray.forEach(arrayItem => StartPoint.append(arrayItem));
}

sortList(employees);

function getEmployees(list) {
  const employeesList = Array.from(list).map((person) => {
    return {
      name: person.lastChild.textContent.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });

  return employeesList;
}

getEmployees(employees);
