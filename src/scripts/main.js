'use strict';

const list = document.querySelector('ul');
const items = document.querySelectorAll('li');
const listItems = [...items];

const sortList = () => {
  const getSalary = (item) => {
    return +item.dataset['salary'].slice(1).replace(',', '.');
  };

  listItems.sort((itemOne, itemTwo) => getSalary(itemTwo) - getSalary(itemOne));

  return listItems;
};

const getEmployees = (place, employees) => {
  employees.forEach(element => place.append(element));
};

sortList();
getEmployees(list, listItems);
