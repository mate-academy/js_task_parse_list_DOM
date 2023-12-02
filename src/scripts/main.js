'use strict';

const ulElement = document.querySelector('ul');
const employee = document.querySelectorAll('li');
const sortedArray = [...employee];

const parseInteger = (num) => +num.replace(/[$,]/g, '');

function sortList(list) {
  list.sort((a, b) =>
    parseInteger(b.dataset.salary)
  - parseInteger(a.dataset.salary));
}

function htmlApruvd() {
  ulElement.innerHTML = '';

  for (const person of sortedArray) {
    ulElement.insertAdjacentHTML('beforeend', person.outerHTML);
  }
}

sortList(sortedArray);
htmlApruvd();
