'use strict';

const list = document.querySelector('ul');
const listOfElements = document.querySelectorAll('li');

function sortList(data) {
  const dataArr = [...data];

  const convertNumber = (string) => {
    return +string.dataset.salary.slice(1).split(',').join('');
  };

  dataArr.sort((a, b) => convertNumber(b) - convertNumber(a));

  list.append(...dataArr);
}

function getEmplotees(data) {
  return [...data].map((employee) => ({
    name: employee.textContent,
    ...employee.dataset,
  }));
}

sortList(listOfElements);
getEmplotees(listOfElements);
