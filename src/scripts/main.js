'use strict';

const arr = document.querySelector('ul').children;
const arrCopy = [...arr];

function getSorted(list) {
  function strToNum(string) {
    return Number(string.replaceAll(/\D/g, ''));
  }

  const listCopy = [...list];

  return listCopy.sort((elem1, elem2) => {
    return strToNum(elem2.dataset.salary) - strToNum(elem1.dataset.salary);
  });
}

function getEmployees(listToReplace, sortedList) {
  for (let i = 0; i < listToReplace.length; i++) {
    listToReplace[i].replaceWith(sortedList[i].cloneNode(true));
  }
}

document.createElement('div');

getEmployees(arr, getSorted(arrCopy));
