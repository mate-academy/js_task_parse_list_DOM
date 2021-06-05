'use strict';

// write code here
const liList = document.querySelectorAll('li');

function sortList(list) {
  const liArray = Array.from(list);

  liArray.sort((a, b) => {
    return formatData(b.dataset.salary) - formatData(a.dataset.salary);
  });

  const ul = document.querySelector('ul');

  liArray.forEach(elem => ul.append(elem));
}

function formatData(string) {
  const recString = string.slice(1);
  const number = +recString.split(',').join('');

  return number;
}

function createEmplObj(list) {
  const empArray = [];

  for (const item of list) {
    empArray.push({
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  };

  return empArray;
}

sortList(liList);

createEmplObj(liList);
