'use strict';

// write code here
const ul = document.querySelector('ul');

function sortList(list) {
  const liArray = Array.from(list);

  liArray.sort((a, b) => (
    formatData(b.dataset.salary) - formatData(a.dataset.salary))
  );

  ul.append(...liArray);
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

sortList(ul.children);

createEmplObj(ul.children);
