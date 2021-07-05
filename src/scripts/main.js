'use strict';

const arrEmployees = document.querySelector('ul');

function stringToNumber(string) {
  return +string.replace(',', '').slice(1);
}

function sortToSalary(list) {
  return [ ...list.children ]
    .sort((a, b) =>
      stringToNumber(b.dataset.salary) - stringToNumber(a.dataset.salary))
    .forEach(person => list.append(person));
}

function getEmployees(list) {
  return list.children.map(
    person => ({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: +person.dataset.age,
    })
  );
}

sortToSalary(arrEmployees);
getEmployees(arrEmployees);
