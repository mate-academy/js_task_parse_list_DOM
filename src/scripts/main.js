'use strict';

const ul = document.querySelector('ul');
const listElements = document.querySelectorAll('li');

const sortList = (list) => {
  const strToNumber = (x) => Number(x.dataset.salary.replace(/[^+\d]/g, ''));
  const result = [...list].sort((a, b) => strToNumber(b) - strToNumber(a));

  listElements.forEach(item => item.remove());
  ul.append(...result);

  return result;
};

const getEmployees = (list) => {
  const coworkerArr = [];

  for (let i = 0; i < list.length; i++) {
    const coworker = {
      name: list[i].innerText,
      position: list[i].dataset.position,
      salary: list[i].dataset.salary,
      age: list[i].dataset.age,
    };

    coworkerArr.push(coworker);
  }

  return coworkerArr;
};

sortList(listElements);
getEmployees(listElements);
