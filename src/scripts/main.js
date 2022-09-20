'use strict';

// write code here
const listSelector = document.querySelector('ul');

const formatToNumber = (str) => Number(str.replace(/\$|,/gi, ''));

const sortList = (list) => {
  const sortedArr = [...list.querySelectorAll('li')];

  sortedArr.sort((prev, curr) => (
    formatToNumber(curr.dataset.salary) - formatToNumber(prev.dataset.salary)
  ));

  list.append(...sortedArr);
};

sortList(listSelector);

const getEmployees = (list) => {
  const listItems = [...list.querySelectorAll('li')];

  return listItems.map(el => ({
    name: el.textContent.trim(),
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
};

getEmployees(listSelector);
