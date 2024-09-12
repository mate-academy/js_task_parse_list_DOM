'use strict';

const list = document.querySelector('ul');

const toModifySallary = (el) => el.replace(/[$,]/g, '');

function sortList(callback, ulList) {
  const arr = [...ulList.children];

  arr.sort((a, b) => {
    const el1 = callback(a.dataset.salary);
    const el2 = callback(b.dataset.salary);

    return el2 - el1;
  });

  arr.forEach(el => ulList.append(el));

  return arr;
};

function getEmployees(ulList) {
  const employees = [];
  const arr = [...ulList.children];

  arr.forEach(item => {
    const obj = {
      name: item.textContent,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    employees.push(obj);
  });

  return employees;
};

sortList(toModifySallary, list);
getEmployees(list);
