'use strict';

const ul = document.querySelector('ul');
const lists = [...ul.children];

const resultNumber = str => {
  return +(str.split('$').join('').split(',').join(''));
};

function sortList(list) {
  const sortedList = list.sort((a, b) =>
    resultNumber(b.dataset.salary) - resultNumber(a.dataset.salary)
  );

  ul.append(...sortedList);
}

function getEmployees(list) {
  return list.map(item => ({
    name: item.innerText,
    ...item.dataset,
  }));
}

sortList(lists);
getEmployees(lists);
