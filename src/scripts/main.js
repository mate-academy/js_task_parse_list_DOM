'use strict';

const people = document.querySelectorAll('li');
const peopleList = [...people];

function toNumber(str) {
  return +str.substring(1).split(',').join('');
}

function sortList(list) {
  const sortedList = list.sort((a, b) =>
    toNumber(b.dataset.salary)
    - toNumber(a.dataset.salary));

  document.querySelector('ul').append(...sortedList);
};

function getEmployess(list) {
  return list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(peopleList);
getEmployess(peopleList);
