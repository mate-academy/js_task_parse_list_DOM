'use strict';

const list = document.querySelector('ul');

function sortList(listItems) {
  const sortedList = [...listItems].sort((itemA, itemB) => {
    const numA = toNumber(itemA);
    const numB = toNumber(itemB);

    return numB - numA;
  });

  list.append(...sortedList);

  return list;
}

function toNumber(listItem) {
  return listItem.dataset.salary.slice(1).split(',').join('');
}

function getEmployees(listItems) {
  return [...listItems].map((item, index) => ({
    name: item.innerText,
    position: index,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

sortList(list.children);
getEmployees(list.children);
