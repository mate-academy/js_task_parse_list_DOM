'use strict';

const employees = [...document.querySelectorAll('li')];
const list = document.querySelector('ul');
const newList = document.createElement('ul');

const sortList = (arr) => {
  return arr.sort((itemA, itemB) => {
    const salaryA = +itemA.dataset.salary.slice(1).replace(',', '');
    const salaryB = +itemB.dataset.salary.slice(1).replace(',', '');

    return salaryB - salaryA;
  });
};

const getEmployees = (newArr) => {
  newArr.forEach((element) => {
    newList.append(element);
  });

  list.replaceWith(newList);
};

getEmployees(sortList(employees));
