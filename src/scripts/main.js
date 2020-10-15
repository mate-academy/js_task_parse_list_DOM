'use strict';

const employees = [...document.querySelectorAll('li')];
const employList = document.querySelector('ul');

function salaryInNumber(salary) {
  return Number(salary.replace('$', '').split(',').join(''));
}

function sortList(list) {
  return [...list].sort((a, b) =>
    salaryInNumber(b.dataset.salary) - salaryInNumber(a.dataset.salary));
}

function getEmployees(list) {
  const employeesArray = [];

  for (const person of list) {
    const personInfo = {
      name: person.innerHTML.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

    employeesArray.push(personInfo);
  }

  return employeesArray;
}

employList.append(...sortList(employees));
getEmployees(employees);
