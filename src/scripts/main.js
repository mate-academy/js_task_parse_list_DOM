'use strict';

const employeesList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function getSalary(person) {
  return Number(person.dataset.salary.slice(1).replace(',', ''));
}

function sortList(people) {
  const sorted = people.sort((prevPerson, currPerson) => (
    getSalary(currPerson) - getSalary(prevPerson)
  ));

  employeesList.append(...sorted);
}

function getEmployees(people) {
  return people.map((person) => {
    return {
      name: person.innerText,
      ...person.dataset,
    };
  });
}

sortList(employees);
getEmployees(employees);
