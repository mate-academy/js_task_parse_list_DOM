'use strict';

const list = [...document.querySelectorAll('li')];

const sortList = (argList) => {
  argList.sort(
    (e1, e2) => toNumber(e2.dataset.salary) - toNumber(e1.dataset.salary));
};

const getEmployees = (argList) => {
  return argList.map(e => ({
    name: e.innerText,
    position: e.dataset.position,
    salary: e.dataset.salary,
    age: e.dataset.age,
  }));
};

const toNumber = (e) => {
  return e.slice(1).replaceAll(',', '');
};

sortList(list);

getEmployees(list);
