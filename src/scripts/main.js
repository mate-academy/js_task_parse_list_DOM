'use strict';

const ul = document.querySelector('ul');

function strToNum(salary) {
  return +salary.replace(/\D+/g, '');
}

function sortList(list) {
  const sortedList = [...list.children]
    .sort((a, b) => strToNum(b.dataset.salary) - strToNum(a.dataset.salary));

  ul.append(...sortedList);
}

function getEmployees(list) {
  const arrList = [...list.children];
  const resArr = [];

  for (const child of arrList) {
    const { age, position, salary } = child.dataset;

    resArr.push({
      name: child.innerText,
      position,
      salary,
      age,
    });
  }

  return resArr;
}

sortList(ul);
getEmployees(ul);
