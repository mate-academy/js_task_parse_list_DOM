'use strict';

const list = document.querySelector('ul');

function transformInNum(str) {
  return parseInt(str.split(',').join('').slice(1));
}

function sortList(arr) {
  const newList = [...arr.children].sort(
    (elem1, elem2) =>
      transformInNum(elem1.dataset.salary) -
      transformInNum(elem2.dataset.salary),
  );

  return newList.forEach((obj) => arr.prepend(obj));
}

function getEmployees(array) {
  const result = [];

  for (const obj of [...array.children]) {
    const simpleObj = {
      name: obj.innerText,
      positition: obj.dataset.position,
      salary: obj.dataset.salary,
      age: obj.dataset.age,
    };

    result.push(simpleObj);
  }

  return result;
}

sortList(list);
getEmployees(list);
