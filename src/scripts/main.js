'use strict';

const listToSort = document.querySelector('ul');

function strToNum(string) {
  return Number(string.replace('$', '').replace(',', ''));
}

const sortList = (list) => {
  const copyList = [...list.children];

  copyList.sort((a, b) =>
    strToNum(b.dataset.salary) - strToNum(a.dataset.salary));
  copyList.forEach(item => list.append(item));
};

const getEmployees = (list) => {
  const copyList = [...list.children];

  copyList.map(item => ({
    name: item.innerText, ...item.dataset,
  }));
};

sortList(listToSort);
getEmployees(listToSort);
