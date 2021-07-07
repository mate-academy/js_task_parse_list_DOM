'use strict';

const data = document.querySelector('ul');

function conv(item) {
  return Number(item.substr(1).split(',').join(''));
};

function sortList(param) {
  const list = [...param.children];

  return list.sort((a, b) => conv(b.dataset.salary) - conv(a.dataset.salary));
};

function getEmployees(array) {
  return data.append(...sortList(array));
};

sortList(data);
getEmployees(data);
