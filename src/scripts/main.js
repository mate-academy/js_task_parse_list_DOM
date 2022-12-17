'use strict';

const ul = document.querySelector('ul');
const list = [...ul.children];

function sortList(params) {
  const sorted = params.sort((a, b) =>
    Number(b.dataset.salary.split('$').join('').split(',').join('')
    - Number(a.dataset.salary.split('$').join('').split(',').join('')))
  );

  ul.append(...sorted);
}

function getEmployee(params) {
  return params.map(item => ({
    name: item.innerText,
    ...item.dataset,
  }));
}

sortList(list);
getEmployee(list);
