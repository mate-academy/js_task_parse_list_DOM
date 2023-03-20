'use strict';

const employee = [...document.querySelectorAll('li')];
const toNumber = str => {
  return +(str.split(',').join('').slice(1));
};

function sortList(list) {
  const sortedList = list.sort((a, b) => toNumber(b.dataset.salary)
    - toNumber(a.dataset.salary));

  sortedList.forEach(element => {
    document.querySelector('ul').append(element);
  });
}

function getEmployees(list) {
  return list.map(element => ({
    name: element.innerText,
    position: element.dataset.position,
    salary: element.dataset.salary,
    age: element.dataset.age,
  }));
}

sortList(employee);
getEmployees(employee);
