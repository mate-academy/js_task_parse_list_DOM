'use strict';

// write code here
const employersList = Array.from(document.querySelectorAll('li'));
const ulList = document.querySelector('ul');

function getSortArr(list) {
  const copyList = [...list];

  copyList.sort((prev, next) => {
    return getNum(next.dataset.salary) - getNum(prev.dataset.salary);
  });

  return copyList;
}

function getNum(string) {
  return +string.replace(/\D/g, '');
};

const employersSortedList = getSortArr(employersList);

function sortList(sortedList, pageList) {
  sortedList.forEach(item => pageList.append(item));
}

sortList(employersSortedList, ulList);
