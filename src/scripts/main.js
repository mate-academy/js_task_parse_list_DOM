'use strict';

const personsList = document.querySelectorAll('li');
const ulList = document.querySelector('ul');

function sortList(list) {
  function convert(string) {
    return +string.slice(1).split(',').join('');
  }

  const sortedList = [...list].sort((x, y) =>
    convert(y.dataset.salary) - convert(x.dataset.salary));

  for (const person of sortedList) {
    ulList.append(person);
  }
};

function getEmployees(list) {
  const result = [];

  for (const person of [...list]) {
    const personObj = {};

    personObj.name = person.innerText;
    personObj.position = person.dataset.position;
    personObj.salary = person.dataset.salary;
    personObj.age = person.dataset.age;

    result.push(personObj);
  }

  return result;
};

sortList(personsList);
getEmployees(personsList);
