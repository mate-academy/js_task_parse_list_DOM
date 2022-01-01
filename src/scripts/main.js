'use strict';

const listOfPeople = document.querySelectorAll('li');
const listArr = [ ...listOfPeople ];
const element = document.querySelector('ul');

function sortList(list) {
  list.sort((item1, item2) => {
    const newItem1 = +item1.dataset.salary.slice(1).split(',').join('.');
    const newItem2 = +item2.dataset.salary.slice(1).split(',').join('.');

    return newItem2 - newItem1;
  });

  for (const item of list) {
    element.append(item);
  }
}

function getEmployees(list) {
  return list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(listArr);
getEmployees(listArr);
