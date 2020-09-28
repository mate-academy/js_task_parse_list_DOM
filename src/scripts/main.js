'use strict';

// write code here
const listOfEmploeesLi = document.querySelectorAll('li');
const listOfEmploees = [...listOfEmploeesLi];

listOfEmploees.sort((a, b) =>
  (+b.dataset.salary.substring(1).split(',').join(''))
  - (+a.dataset.salary.substring(1).split(',').join('')));

document.querySelector('ul').append(...listOfEmploees);

listOfEmploees.map(current => ({
  name: current.innerText,
  position: current.dataset.position,
  salary: current.dataset.salary,
  age: current.dataset.age,
}));
