'use strict';

const list = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sort(listOfLi) {
  const sortedList = listOfLi.sort((a, b) =>
    +b.dataset.salary.slice(1).split(',').join('')
    - +a.dataset.salary.slice(1).split(',').join(''));

  ul.append(...sortedList);
}

function getEmploees(listOfLi) {
  return listOfLi.map(liValue => ({
    name: liValue.innerText,
    position: liValue.dataset.position,
    salary: liValue.dataset.salary,
    age: liValue.dataset.age,
  }));
}

sort(list);
getEmploees(list);
