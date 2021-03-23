'use strict';

// write code here
const employeesList = document.querySelector('ul');
const employees = document.querySelectorAll('li');

function converter(salary) {
  return salary.replace('$', '').replace(',', '');
}

function sortList(list) {
  const sortedList = [...list].sort((firstSalary, secondSalary) =>
    converter(secondSalary.dataset.salary)
      - converter(firstSalary.dataset.salary));

  employeesList.append(...sortedList);
}

function getEmployees(list) {
  return [...list].map(person => ({
    name: person.textContent,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
