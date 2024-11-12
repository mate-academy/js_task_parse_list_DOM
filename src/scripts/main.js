'use strict';

const people = [...document.querySelectorAll('li')];
const toNumber = function (obj) {
  return +obj.getAttribute('data-salary').replace(/[$,]/g, '');
};

function sortList(arr) {
  return arr.sort((person1, person2) => toNumber(person1) - toNumber(person2));
}

function getEmployees(arr) {
  const arrPeople = [];

  for (const person of arr) {
    const objPerson = {};

    objPerson.name = person.textContent.trim();
    objPerson.position = person.getAttribute('data-position');
    objPerson.salary = person.getAttribute('data-salary');
    objPerson.age = person.getAttribute('data-age');

    arrPeople.push(objPerson);
  }

  return arrPeople;
}
sortList(people);
getEmployees(people);
