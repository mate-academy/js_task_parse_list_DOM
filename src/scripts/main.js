'use strict';

const list = document.querySelector('ul');
const items = [...document.querySelectorAll('li')];

const sortList = () => {
  const getSalary = (item) => {
    return +item.dataset['salary'].slice(1).replace(',', '.');
  };

  items.sort((itemOne, itemTwo) => getSalary(itemTwo) - getSalary(itemOne));

  return items;
};

const getEmployees = (place, employees) => {
  employees.forEach(element => place.append(element));
};

sortList();
getEmployees(list, items);
