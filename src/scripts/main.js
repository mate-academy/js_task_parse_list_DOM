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

employees.forEach((employee, index) => {
  employeesList[index].innerText = employee.name;
  employeesList[index].dataset.position = employee.position;

  employeesList[index].dataset.salary = '$'
    + parseInt(employee.salary).toLocaleString('en-US');

  employeesList[index].dataset.age = employee.age;
});
