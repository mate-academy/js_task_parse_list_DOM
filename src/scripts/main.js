'use strict';

const list = document.querySelector('ul');
const listItems = [...list.children];
const getNumFromStr = (string) => {
  return Number(string.replace('$', '').replace(/,/g, ''));
};

function sortList() {
  const sortedList = listItems.sort((a, b) => {
    return getNumFromStr(b.dataset.salary) - getNumFromStr(a.dataset.salary);
  });

  list.append(...sortedList);

  return sortedList;
};

function getEmployees() {
  const array = listItems.map(item => {
    const obj = {};

    obj.name = item.innerText;
    obj.position = item.dataset.position;
    obj.salary = item.dataset.salary;
    obj.age = item.dataset.age;

    return obj;
  });

  return array;
}

getEmployees();
sortList();
