'use strict';

function salaryToNum(str) {
  return +str.dataset.salary.slice(1).replace(',', '');
}

const list = document.querySelector('ul');
const listItem = document.querySelectorAll('li');

const sortedList = [...listItem]
  .sort((a, b) => salaryToNum(b) - salaryToNum(a));

for (let i = 0; i < sortedList.length; i++) {
  list.append(sortedList[i]);
}
