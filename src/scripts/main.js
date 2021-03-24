'use strict';

// write code here
const peopleList = [...document.querySelectorAll('li')];
const ulAppendSelector = document.querySelector('ul');

function convert(str) {
  const result = str.slice(1).split(',').join('');

  return result;
}

function sortList(list) {
  const sortSalary = list.sort((salaryA, salaryB) => {
    return +convert(salaryB.dataset.salary)
    - +convert(salaryA.dataset.salary);
  });

  ulAppendSelector.append(...sortSalary);
};

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};

sortList(peopleList);
getEmployees(peopleList);
