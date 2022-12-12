'use strict';

const ul = document.querySelector('ul');
const listOfLi = [...document.querySelectorAll('li')];

function sortList(list) {
  const sortedList = list.sort((a, b) => {
    const itemA = convertToNumber(a.dataset.salary);
    const itemB = convertToNumber(b.dataset.salary);

    return itemB - itemA;
  });

  ul.prepend(...sortedList);
}

function getEmployees(list) {
  return list.map(x => {
    return {
      name: x.textContent.trim(),
      position: x.dataset.position,
      salary: x.dataset.salary,
      age: x.dataset.age,
    };
  });
}

function convertToNumber(str) {
  return +str.slice(1).split(',').join('');
}

sortList(listOfLi);
getEmployees(listOfLi);
