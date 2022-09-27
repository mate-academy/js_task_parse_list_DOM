'use strict';

// write code here
const allList = document.querySelector('ul');
const itemLi = [...document.querySelectorAll('li')];
const convertNum = salary => +salary.slice(1).split(',').join('');

function sortList(list) {
  const result = list.sort((a, b) =>
    convertNum(b.dataset.salary) - convertNum(a.dataset.salary));

  allList.append(...result);
};

function getEmployees(list) {
  return list.map((item) => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

getEmployees(itemLi);

sortList(itemLi);
