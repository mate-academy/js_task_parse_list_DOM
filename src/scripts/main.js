'use strict';

const employees = [...document.querySelectorAll('li')];

const toNumber = str => {
  return +(str.split(',').join('').slice(1));
};

function sortBySalary(list) {
  const sortedList = list.sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  sortedList.forEach(elem =>
    document.querySelector('ul').append(elem));
}

function getEmployees(list) {
  return list.map(elem => ({
    name: elem.innerText,
    ...elem.dataset,
  }));
}

sortBySalary(employees);
getEmployees(employees);
