'use strict';

const employees = [...document.querySelectorAll('li')];
const list = document.querySelector('ul');
const newList = document.createElement('ul');

const sortList = (arr) => {
  return arr.sort((a, b) => {
    const salaryA = parseInt(a.dataset.salary.slice(1).replace(',', '')) || 0;
    const salaryB = parseInt(b.dataset.salary.slice(1).replace(',', '')) || 0;

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
