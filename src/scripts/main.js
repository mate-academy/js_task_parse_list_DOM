/* eslint-disable no-console */
'use strict';

const people = document.querySelector('ul');
const peopleList = document.querySelectorAll('li');

const salaryFormating = (person) => (
  Number(person.salary.replace(/[$,]+/g, ''))
);

const sortList = (list) => {
  return list.sort((emp1, emp2) => (
    salaryFormating(emp2) - salaryFormating(emp1))
  );
};

const getEmployees = (list) => {
  return [...list].map(employee => ({
    name: employee.innerText,
    ...employee.dataset,
  }));
};

people.innerHTML = sortList(getEmployees(peopleList))
  .reduce((acc, curr) => (
    acc + `<li>${curr.name}</li>`
  ), '');
