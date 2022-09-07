'use strict';

// write code here
const unList = document.querySelectorAll('li');

function sortList(list) {
  const unpacked = [...list];

  const x = unpacked.sort((a, b) => {
    return Number(b.dataset.salary.replace(',', '').slice(1))
      - Number(a.dataset.salary.replace(',', '').slice(1));
  });

  return x;
};

const sortedList = sortList(unList);

const resultArr = [];

function getEmployees(list) {
  list.forEach(item => {
    const obj = {};

    obj.name = item.innerHTML.trim();
    obj.position = item.dataset.position.trim();
    obj.salary = item.dataset.salary.trim();
    obj.age = item.dataset.age.trim();
    resultArr.push(obj);
  });

  return resultArr;
}

sortList(unList);
getEmployees(sortedList);
