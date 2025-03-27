'use strict';

// write code here
const elems = [...document.querySelectorAll('li')];

const sortList = (list) => {
  const pageList = document.querySelector('ul');

  list
    .sort(
      (a, b) =>
        +a.getAttribute('data-salary').slice(1).split(',').join('') -
        +b.getAttribute('data-salary').slice(1).split(',').join(''),
    )
    .map((elem) => pageList.insertAdjacentElement('afterbegin', elem));
};

const getEmployees = (list) => {
  return list.map((elem) => ({
    position: elem.dataset.position,
    salary: elem.dataset.salary,
    age: elem.dataset.age,
  }));
};

sortList(elems);
getEmployees(elems);
