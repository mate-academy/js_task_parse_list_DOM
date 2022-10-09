'use strict';

const list = document.querySelector('ul');
const items = document.querySelectorAll('li');
const arr = [...items];

const sortList = () => {
  const getSalary = (item) => {
    return +item.dataset['salary'].slice(1).replace(',', '.');
  };

  arr.sort((itemOne, itemTwo) => getSalary(itemTwo) - getSalary(itemOne));

  return arr;
};

const getEmployees = (place, employees) => {
  employees.forEach(element => place.append(element));
};

sortList();
getEmployees(list, arr);
