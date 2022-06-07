'use strict';

const peopleCollection = document.querySelector('ul');
const people = [...peopleCollection.children];

function sortList(list) {
  const personSalary = salary =>
    +salary.dataset.salary.split('$').join('').split(',').join('');

  list.sort((a, b) => {
    return personSalary(b) - personSalary(a);
  });

  peopleCollection.append(...list);
}

function getEmployees(list) {
  const employeesArray = list.map(result => ({
    name: result.outerText,
    position: result.dataset.position,
    salary: result.dataset.salary,
    age: result.dataset.age,
  }));

  return employeesArray;
}

sortList(people);
getEmployees(people);
