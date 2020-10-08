'use strict';

const employees = document.querySelectorAll('li');
const employeesList = document.querySelector('ul');

function sortList(list) {
  return [...list].sort((person1, person2) =>
    getNumber(person2.dataset.salary) - getNumber(person1.dataset.salary)
  );
}

function getNumber(string) {
  return +string.replace(/\D*/g, '');
}

function getEmployees(list) {
  const people = [];

  for (const person of list) {
    people.push({
      name: person.innerText,
      ...person.dataset,
    });
  }

  return people;
}

employeesList.append(...sortList(employees));
getEmployees(employees);
