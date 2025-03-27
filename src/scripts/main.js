'use strict';

const inputList = document.querySelector('ul');
const listItems = [...document.querySelectorAll('li')];

function sortList(list) {
  function convertToNum(str) {
    return +str.slice(1).split(',').join('');
  }

  list.sort((el1, el2) => {
    return convertToNum(el2.dataset.salary) - convertToNum(el1.dataset.salary);
  });

  inputList.append(...list);
}

function getEmployees(list) {
  return list.map((el) => ({
    name: el.innerText,
    ...el.dataset,
  }));
}

sortList(listItems);
getEmployees(listItems);
