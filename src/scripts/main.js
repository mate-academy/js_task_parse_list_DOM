'use strict';

const listElement = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

const listArray = [...listItems];

sortList(listArray);

function sortList(list) {
  list.sort((a, b) => {
    const first = parseInt(a.dataset.salary.replace(/\D/g, ''));
    const second = parseInt(b.dataset.salary.replace(/\D/g, ''));

    return second - first;
  });
}

function getEmployees(list) {
  list.map(element => {
    listElement.append(element);
  });
}

getEmployees(listArray);
