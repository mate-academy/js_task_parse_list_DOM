'use strict';

const listLi = [...document.querySelectorAll('li')];
const listUl = document.querySelector('ul');

const makeNumber = val =>
  +val.dataset.salary.slice(1).split(',').join('');

function sortList(salariesList, callback) {
  const sortBySalary = salariesList.sort((a, b) => callback(b) - callback(a));

  return listUl.append(...sortBySalary);
}

function getEmployees(list) {
  return [...list].map(el => {
    const employeeDataObj = {};

    employeeDataObj.name = el.innerText;
    employeeDataObj.position = el.dataset.position;
    employeeDataObj.salary = el.dataset.salary;
    employeeDataObj.age = el.dataset.age;

    return employeeDataObj;
  });
}

sortList(listLi, makeNumber);
getEmployees(listLi);
