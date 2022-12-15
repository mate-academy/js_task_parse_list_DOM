'use strict';

// write code here
const list = document.querySelector('ul');

const listElements = [...list.children];

const sortList = arr => {
  arr.sort((a, b) => {
    return (convertToNumber(b)) - (convertToNumber(a));
  });

  arr.forEach(el => list.appendChild(el));
};

const convertToNumber = value => {
  return +(value.dataset.salary.split(',').join('').slice(1));
};

const getEmployees = arr => {
  return arr.map(person => (
    {
      name: person.innerText,
      position: person.dataset.position,
      sallary: person.dataset.age,
    }));
};

sortList(listElements);
getEmployees(listElements);
