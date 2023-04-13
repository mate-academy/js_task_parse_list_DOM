'use strict';

// data-salary="$162,700"
// write code here
const list = [...document.querySelectorAll('li[data-salary]')];

const listParent = document.querySelector('ul');

const convertNumToStr = elem => +elem.slice(1).split(',').join('');

const sortList = (listToSort) => {
  const sortedList = listToSort.sort((a, b) => {
    return convertNumToStr(b.dataset.salary)
    - convertNumToStr(a.dataset.salary);
  });

  listParent.innerHTML = '';

  sortedList.forEach(item => {
    listParent.append(item);
  });
};

const getEmployees = (listToAnalyze) => {
  return listToAnalyze.map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
};

sortList(list);
getEmployees(list);
