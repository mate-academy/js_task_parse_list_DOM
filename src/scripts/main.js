'use strict';

const liElements = [...document.querySelectorAll('li')];

const employes = liElements.map((li) => ({
  name: li.innerText,
  position: li.getAttribute('data-position'),
  salary: li.getAttribute('data-salary'),
  age: li.getAttribute('data-age'),
}));

function convertsToNumber(value) {
  return parseFloat(value.replace(/[^0-9.-]+/g, ''));
}

function sortList(people) {
  return people.sort((a, b) => {
    const person1Salary = convertsToNumber(a.salary);
    const person2Salary = convertsToNumber(b.salary);

    return person2Salary - person1Salary;
  });
}

function getEmployees(people) {
  return people.map((person) => ({
    ...person,
    // salary: '$' + person.salary,
  }));
}

sortList(employes);
getEmployees(employes);

// console.log(employes)
