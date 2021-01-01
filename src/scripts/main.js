'use strict';

const employees = [...document.querySelectorAll('li')];
const employList = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  employList.append(...list);
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
};

function toNumber(string) {
  return Number(string.replace(/\D/g, ''));
};

sortList(employees);
getEmployees(employees);
