'use strict';

// write code here
const people = [...document.querySelectorAll('li')];

function sortList(list) {
  const listWithSalary = list.sort((a, b) =>
    Number(b.getAttribute('data-salary').replace(/[^0-9]/gim, ''))
  - Number(a.getAttribute('data-salary').replace(/[^0-9]/gim, '')));

  document.querySelector('ul').append(...listWithSalary);
}

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataSet.position,
    salary: person.dataSet.salary,
    age: person.dataSet.age,
  }));
};

sortList(people);
getEmployees(people);
