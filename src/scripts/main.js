'use strict';

const listElements = [...document.getElementsByTagName('li')];
const ul = document.querySelector('ul');
const schema = ['name', 'position', 'salary', 'age'];

function sortList(list) {
  list.sort((prev, next) => {
    const prevSalary = prev.getAttribute('data-salary');
    const nextSalary = next.getAttribute('data-salary');

    return convertToNumber(nextSalary) - convertToNumber(prevSalary);
  });

  ul.append(...listElements);
}

function convertToNumber(string) {
  return Number(string.split(',').join('').split('$').join(''));
}

function getEmployees(list) {
  const listArray = [];

  for (let i = 0; i < listElements.length; i++) {
    const personInObject = {};
    const person = list[i];

    for (let j = 0; j < schema.length; j++) {
      const property = schema[j];

      if (property === 'name') {
        personInObject[property] = person.innerText;
      } else {
        personInObject[property] = person.dataset[property];
      }
    }

    listArray.push(personInObject);
  }

  return listArray;
}

sortList(listElements);
getEmployees(listElements);
