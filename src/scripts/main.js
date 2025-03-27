'use strict';

const mainList = document.querySelector('ul');
const listOfEmployees = document.querySelectorAll('li');

const toNumber = (str) => {
  return +str.dataset.salary.slice(1).split(',').join('');
};

const sortList = (item) => {
  const sort = [...item].sort((a, b) =>
    toNumber(b) - toNumber(a));

  mainList.append(...sort);
};

const getEmployees = (property) => {
  const arr = [];

  [...property].forEach(employee => {
    const obj = {};

    obj.name = employee.dataset.innerText;
    obj.position = employee.dataset.position;
    obj.salary = employee.dataset.salary;
    obj.age = employee.dataset.age;

    arr.push(obj);
  });
};

getEmployees(listOfEmployees);
sortList(listOfEmployees);
