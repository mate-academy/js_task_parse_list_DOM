'use strict';

const listParent = document.querySelector('ul');
const list = document.querySelectorAll('li');
const getNumFromStr = (string) => {
  return Number(string.replace('$', '').replace(/,/g, ''));
};

function sortList() {
  const sortedList = [...list].sort((a, b) => {
    return getNumFromStr(b.dataset.salary) - getNumFromStr(a.dataset.salary);
  });

  sortedList.forEach(item => listParent.append(item));

  return sortedList;
};

function getEmployees() {
  const array = [...list].map(item => {
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
