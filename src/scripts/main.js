'use strict';

const ulMain = document.querySelector('ul');
const listUl = ulMain.children;

function sortList(list) {
  const sortL = [...listUl].sort((a, b) => {
    return creatNumber(b.dataset.salary) - creatNumber(a.dataset.salary);
  });

  for (const lis of sortL) {
    ulMain.insertAdjacentElement('beforeend', lis);
  }
}

function getEmployees(list) {
  const objEl = [...list].map(elem => {
    return {
      name: elem.innerText,
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    };
  });

  return objEl;
}

function creatNumber(str) {
  const corectNumb = str.slice(1).split(',').join('');

  return corectNumb;
};

sortList(listUl);
getEmployees(listUl);
