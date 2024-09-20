'use strict';

const items = [...document.querySelectorAll('li')];

const convertToNumber = (str) => {
  return Number(str.split('$').join('').split(',').join(''));
};

function sortList(list) {
  const listOfPeople = document.querySelector('ul');

  list
    .sort(
      (item1, item2) =>
        convertToNumber(item2.dataset.salary) -
        convertToNumber(item1.dataset.salary),
    )
    .forEach((person) => listOfPeople.appendChild(person));
}

function getEmployees(list) {
  return list.map((item) => {
    return {
      name: item.innerText,
      age: +item.dataset.age,
      position: item.dataset.position,
      salary: item.dataset.salary,
    };
  });
}

sortList(items);
getEmployees(items);
