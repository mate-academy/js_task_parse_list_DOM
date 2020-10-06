'use strict';

const employees = document.querySelectorAll('li');
const employeesList = document.querySelector('ul');

function sortList(list) {
  return [...list].sort((person1, person2) =>
    getNumber(person2.dataset.salary) - getNumber(person1.dataset.salary)
  );
}

function getNumber(string) {
  const stringSplited = string.split('');

  for (const char of stringSplited) {
    if (isNaN(char)) {
      stringSplited.splice(stringSplited.indexOf(char), 1);
    }
  }

  return +stringSplited.join('');
}

function getEmployees(list) {
  const people = [];

  for (const person of list) {
    people.push({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  }

  return people;
}

employeesList.append(...sortList(employees));
getEmployees(employees);
