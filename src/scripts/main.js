'use strict';

function strToNum(string) {
  return Number(string.replaceAll(/\D/g, ''));
}

function sortList(list) {
  const ul = document.querySelector('ul');

  list.sort((elem1, elem2) => {
    return strToNum(elem2.dataset.salary) - strToNum(elem1.dataset.salary);
  });

  ul.innerHTML = '';

  list.forEach((elem) => {
    ul.appendChild(elem);
  });
}

function getEmployees() {
  return Array.from(document.getElementsByTagName('li'));
}

sortList([...getEmployees()]);
