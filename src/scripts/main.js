'use strict';

const employeesArray = [...document.querySelectorAll('li')];
const list = document.querySelector('ul');

function sortList(employees) {
  const sortedArr = employees.sort((a, b) => convert(a) > convert(b) ? -1 : 1);

  list.append(...sortedArr);
}

function convert(employee) {
  return +employee.dataset.salary.slice(1).replaceAll(',', '');
}

function getEmployees(persons) {
  return persons.map(person => ({
    name: person.textContent.trim(),
    ...person.dataset,
  }));
}

sortList(employeesArray);
getEmployees(employeesArray);
