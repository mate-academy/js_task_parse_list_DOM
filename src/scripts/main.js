'use strict';

const list = document.querySelector('ul');
const listElements = document.querySelectorAll('li');

function sortList(data) {
  const dataArr = [...data];

  const convertToNumber = (stringValue) => {
    return +stringValue.dataset.salary.slice(1).split(',').join('');
  };

  dataArr.sort((prev, next) => convertToNumber(next) - convertToNumber(prev));

  list.append(...dataArr);
}

function getEmployees(itemOfList) {
  return [...itemOfList].map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
}

sortList(listElements);
getEmployees(listElements);
