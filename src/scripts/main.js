'use strict';

const employeesList = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((a, b) => b.salary - a.salary);
}

function getEmployees(list) {
  const people = [];

  for (const elem of list) {
    const person = {};

    person.name = elem.innerText;
    person.position = elem.dataset.position;
    person.salary = elem.dataset.salary.replace(/[$,]/g, '');
    person.age = elem.dataset.age;

    people.push(person);
  }

  return people;
}

const employees = getEmployees(employeesList);

sortList(employees);

for (let i = 0; i < employees.length; i++) {
  employeesList[i].innerText = employees[i].name;
  employeesList[i].dataset.position = employees[i].position;

  employeesList[i].dataset.salary = '$'
    + parseInt(employees[i].salary).toLocaleString('en-US');

  employeesList[i].dataset.age = employees[i].age;
}
