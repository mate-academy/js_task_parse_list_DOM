'use strict';

// write code here
const peopleList = [...document.querySelectorAll('li')];
const ulAppendSelector = document.querySelector('ul');

function sortList(list) {
  const sortSalary = list.sort((salaryA, salaryB) => {
    return +(salaryB.dataset.salary.slice(1).split(',').join(''))
    - +(salaryA.dataset.salary.slice(1).split(',').join(''));
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
