'use strict';

const list = document.querySelector('ul');
const listItem = list.querySelectorAll('li');
const strToNum = (str) => {
  return str.split('$')[1].split(',').join('');
};

const sortList = () => {
  const sortListItem = [...listItem].sort(
    (a, b) => strToNum(b.dataset.salary) - strToNum(a.dataset.salary)
  );

  for (let i = 0; i < sortListItem.length; i++) {
    list.append(sortListItem[i]);
  }

  return sortListItem;
};

const getEmployees = () => {
  return [...listItem].map((item) => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
};

sortList();
getEmployees();
