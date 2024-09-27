'use strict';

function sortList(list) {
  const sorted = [...list.children].sort((a, b) => {
    const getNumber = str => {
      return +str.slice(1).replaceAll(',', '');
    };

    const first = getNumber(a.dataset.salary);
    const second = getNumber(b.dataset.salary);

    return second - first;
  });

  return sorted;
}

function getEmployees(list) {
  for (let i = 0; i < sortedList.length; i++) {
    let newLi = document.createElement('li');

    newLi = sortedList[i];
    list.append(newLi);
  }

  return list;
}

const initList = document.querySelector('ul');
const sortedList = sortList(initList);

getEmployees(initList);
