'use strict';

const people = [...document.querySelectorAll('li')];
const peopleList = document.querySelector('ul');

peopleList.innerHTML = '';

const changeString = function(arg) {
  return +arg.dataset.salary.replace(/[$,]/g, '');
};

people.sort((prevSalary, nextSalary) =>
  changeString(nextSalary) - changeString(prevSalary));

people.forEach(human => peopleList.append(human));
