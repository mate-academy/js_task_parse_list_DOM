'use strict';

function strToNum(string) {
  return Number(string.replaceAll(/\D/g, ''));
}

function sortList(list) {
  const listCopy = [...list];

  listCopy.sort((elem1, elem2) => {
    return strToNum(elem2.dataset.salary) - strToNum(elem1.dataset.salary);
  });

  for (let i = 0; i < list.length; i++) {
    list[i].replaceWith(listCopy[i].cloneNode(true));
  }
}

function getEmployees() {
  return document.querySelector('ul').children;
}

sortList([...getEmployees()]);
