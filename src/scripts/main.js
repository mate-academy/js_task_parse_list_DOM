'use strict';

// write code here
const startList = document.querySelectorAll('li');
const startListSorted = sortList(startList);
const ul = document.querySelector('ul');

function correctNum(string) {
  return +string.dataset.salary.slice(1).split(',').join('');
}

function sortList(list) {
  return [...list].sort((a, b) => correctNum(b) - correctNum(a));
};

function getEmployees(where, afterElements) {
  afterElements.forEach(element => where.append(element));
};

getEmployees(ul, startListSorted);
