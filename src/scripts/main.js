'use strict';

const listEmployees = document.querySelector('ul');

function toNumber(salary) {
  const rawSalary = salary.replace(/\D/g, '');

  return parseInt(rawSalary);
}

function sortList(list) {
  const listElements = list.querySelectorAll('li');
  const elementsArray = [...listElements];
  const sorted = [...elementsArray].sort((a, b) => {
    const salaryA = toNumber(a.dataset.salary);
    const salaryB = toNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  sorted.forEach((element) => {
    list.appendChild(element);
  });
}

function getEmployees(list) {
  const listElements = list.querySelectorAll('li');
  const elementsArray = [...listElements];
  const employees = elementsArray.map((person) => ({
    name: person.dataset.name,
    position: person.dataset.position,
    salary: toNumber(person.dataset.salary),
    age: toNumber(person.dataset.age),
  }));

  return employees;
}

sortList(listEmployees);
getEmployees(listEmployees);
