'use strict';

const listElement = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

const listArray = [...listItems];

const sortList = (list) => {
  list.sort((a, b) => {
    const first = parseInt(a.dataset.salary.replace(/\D/g, ''));
    const second = parseInt(b.dataset.salary.replace(/\D/g, ''));

    return second - first;
  });
};

sortList(listArray);

const addList = (list) => {
  list.map(element => {
    listElement.append(element);
  });
};

addList(listArray);
