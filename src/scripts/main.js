'use strict';

// write code here

const list = [...document.querySelectorAll('li')];
const ulList = document.querySelector('ul');

function getSalary(person) {
  return Number(person.dataset.salary.slice(1).replace(',', ''));
}

function sortBySalary(people) {
  const sorted = [...people].sort((prevEmp, currEmp) => (
    getSalary(currEmp) - getSalary(prevEmp)
  ));

  ulList.append(...sorted);
}

function getEmployees(people) {
  return people.map((person) => ({
    ...person.dataset,
    name: person.innerText,
  }));
}

sortBySalary(list);
getEmployees(list);
