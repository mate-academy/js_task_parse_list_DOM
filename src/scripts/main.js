'use strict';

function toNumber(str) {
  return Number(str.replace(/\D/g, ''));
}

const allEmployees = Array.from(document.querySelectorAll('li'));

const ulElement = document.querySelector('ul');

function sortList(list) {
  const sortedList = list.sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  while (ulElement.firstChild) {
    ulElement.removeChild(ulElement.firstChild);
  }

  sortedList.forEach(li => ulElement.appendChild(li));
}

function getEmployees(list) {
  const result = list.map(person => ({
    name: person.textContent,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));

  return result;
}

sortList(allEmployees);
getEmployees(allEmployees);
