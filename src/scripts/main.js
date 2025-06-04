'use strict';

const salary = [...document.querySelectorAll('[data-salary]')];
const ul = document.querySelector('ul');
const children = Array.from(ul.childNodes);

function sortList(list) {
  return list.sort((first, second) => {
    const a = first.salary;
    const b = second.salary;

    return b - a;
  });
}

function getEmployees(list) {
  const arrList = list.map((el) => ({
    element: el.innerHTML,
    salary: el.getAttribute('data-salary')
      ? +el.getAttribute('data-salary').slice(1).split(',').join('')
      : 0,
  }));

  children.forEach((child) => ul.removeChild(child));

  const sortArr = sortList(arrList);

  sortArr.forEach((el) => {
    const newLi = document.createElement('li');

    newLi.innerHTML = el.element;
    ul.appendChild(newLi);
  });

  return arrList;
}

getEmployees(salary);
