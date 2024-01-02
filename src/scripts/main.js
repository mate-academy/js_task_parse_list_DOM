'use strict';

const listOfItems = document.querySelectorAll('li');
const originalList = document.querySelector('ul');

function sortList(list) {
  let newList = [...list];

  newList = newList.sort((person1, person2) =>
    convertToNumber(person2.dataset.salary)
    - convertToNumber(person1.dataset.salary));

  originalList.append(...newList);

  getEmployees(newList);
}

function getEmployees(list) {
  return list.map(person => {
    const { age, position, salary } = person.dataset;
    const sortedPeople = {
      name: person.innerText,
      position,
      salary,
      age,
    };

    return sortedPeople;
  });
}

function convertToNumber(salary) {
  return +salary.replace(/[$,]/g, '');
}

sortList(listOfItems);
