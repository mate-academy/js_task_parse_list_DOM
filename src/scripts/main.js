'use strict';

// write code here
const employeesList = document.querySelector('ul');
const employeesData = [...document.querySelectorAll('li')];

function sort(sortPerson) {
  const sortedPerson = +sortPerson.dataset.salary.slice(1).replace(',', '');

  return sortedPerson;
}

function sortList(list) {
  list.sort((personOne, personTwo) => (
    sort(personTwo) - sort(personOne)
  ));

  employeesList.append(...list);
}

function getEmployees(list) {
  const employees = [];

  for (let i = 0; i < list.length; i++) {
    const person = {};

    person.name = list[i].innerText;
    person.position = list[i].dataset.position;
    person.salary = list[i].dataset.salary;
    person.age = list[i].dataset.age;

    employees.push(person);
  }

  return employees;
}

sortList(employeesData);
getEmployees(employeesData);
