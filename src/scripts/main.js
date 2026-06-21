'use strict';

const listEmployees = document.querySelector('ul');

function sortList(list) {
  const listElements = list.querySelectorAll('li');
  const elementsArray = [...listElements];
  const sorted = [...elementsArray].sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/\D/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/\D/g, ''));

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
    salary: Number(person.dataset.salary),
    age: Number(person.dataset.age),
  }));

  return employees;
}

sortList(listEmployees);
getEmployees(listEmployees);
