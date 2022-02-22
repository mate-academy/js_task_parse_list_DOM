'use strict';

const initialList = document.querySelector('ul');

const employees = [...initialList.children];

function toNumber(numberAsString) {
  let resultString;

  if (numberAsString[0] === '$') {
    resultString = numberAsString.slice(1);
  }

  if (typeof (parseInt(resultString.split(',').join('')))
  === 'number') {
    resultString = parseInt(resultString.split(',').join(''));
  }

  return resultString;
}

function sortList(list) {
  const sortedList = list.sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  initialList.append(...sortedList);
}

function getEmployees(list) {
  const result = [];

  for (const elem of list) {
    const employee = {
      name: elem.innerHTML,
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    };

    result.push(employee);
  }

  return result;
}

getEmployees(employees);

sortList(employees);
