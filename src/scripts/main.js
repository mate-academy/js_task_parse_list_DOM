'use strict';

const employees = document.querySelectorAll('li');
const empList = document.querySelector('ul');

function convertToNumber(string) {
  return +string.replace(/\D/g, '');
};

function sortList(list) {
  const sorted = [...list].sort((a, b) => convertToNumber(b.dataset.salary)
  - convertToNumber(a.dataset.salary));

  empList.append(...sorted);
};

function getEmployees(list) {
  const result = [];

  for (const person of list) {
    const personInformation = {
      name: person.innerHTML.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

    result.push(personInformation);
  }

  return result;
}

sortList(employees);
getEmployees(employees);
