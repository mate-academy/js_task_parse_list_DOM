'use strict';

const artElementList = [...document.getElementsByTagName('li')];
const ulElementColection = document.querySelector('ul');

function sortList(list) {
  const sortElemList = list.sort((a, b) =>
    +b.dataset.salary.slice(1).split(',').join('')
    - +a.dataset.salary.slice(1).split(',').join(''));

  ulElementColection.append(...sortElemList);
}

function getEmployees(list) {
  return list.map(vaule => ({
    name: vaule.innerText,
    position: vaule.dataset.position,
    salary: vaule.dataset.salary,
    age: vaule.dataset.age,
  }));
}

sortList(artElementList);
getEmployees(artElementList);
