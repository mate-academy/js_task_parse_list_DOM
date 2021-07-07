'use strict';

const people = [...document.querySelectorAll('li')];
const peopleList = document.querySelector('ul');

peopleList.innerHTML = '';

const changeString = function(arg) {
  return arg.dataset.salary.replace(/[$,]/g, '');
};

people.sort((prevSalary, nextSalary) =>
  changeString(prevSalary) - changeString(nextSalary));

people.forEach(human => peopleList.append(human));
