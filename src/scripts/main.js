'use strict';

const mainList = document.querySelector('ul');
const listOfUlArray = Array.from(mainList.children);

function toNumber(el) {
  return Number(el.dataset.salary.slice(1).split(',').join(''));
}

function sortList(list) {
  const sortLists = list.sort((a, b) => toNumber(b) - toNumber(a));

  const newList = document.createElement('ul');

  newList.append(...sortLists);

  mainList.replaceWith(newList);
}

function getEmployees(list) {
  const objctList = list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  })
  );

  return objctList;
}

sortList(listOfUlArray);
getEmployees(listOfUlArray);
