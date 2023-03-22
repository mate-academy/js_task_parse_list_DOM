'use strict';

const arrList = [...document.getElementsByTagName('li')];
const ulCollection = document.querySelector('ul');

function sortList(list) {
  const sortBySalary = list.sort((a, b) =>
    (b.dataset.salary.split(',').join('').slice(1))
    - (a.dataset.salary.split(',').join('').slice(1)));

  ulCollection.append(...sortBySalary);
};

function getEmployees(list) {
  return list.map(item => ({
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(arrList);
getEmployees(arrList);
