'use strict';

const people = document.querySelector('ul');
const peopleArray = [...people.children];

const sortList = () => {
  peopleArray.sort((a, b) =>
    (+b.dataset.salary.replace(/\D/g, ''))
    - (+a.dataset.salary.replace(/\D/g, '')));

  for (let i = 0; i < peopleArray.length; i++) {
    people.append(peopleArray[i]);
  }
};

const getEmployees = () => {
  const objectArray = [];

  for (let i = 0; i < peopleArray.length; i++) {
    const object = { name: peopleArray[i].innerText };

    objectArray.push(Object.assign(object, peopleArray[i].dataset));
  };

  return objectArray;
};

sortList();
getEmployees();
