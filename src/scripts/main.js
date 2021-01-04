'use strict';

const list = document.querySelectorAll('li');

function sortList(collection) {
  const salariesAndNames = [...collection].map(person => {
    return {
      name: person.innerHTML,
      salary: salaryToNumber(person.dataset.salary),
    };
  });

  salariesAndNames.sort((one, two) => two.salary - one.salary);

  insertToHtml(salariesAndNames, 'li');
}

function salaryToNumber(string) {
  return +string.split(',').join('').replace('$', '');
}

function insertToHtml(array, tagElement) {
  const elementArray = [...document.querySelectorAll(tagElement)];

  for (let i = 0; i < elementArray.length; i++) {
    elementArray[i].textContent = array[i].name;
  }
}

function getEmployees(collection) {
  const array = [...collection].map(person => {
    return {
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: salaryToNumber(person.dataset.salary),
      age: +person.dataset.age,
    };
  });

  return array;
}

sortList(list);
getEmployees(list);
