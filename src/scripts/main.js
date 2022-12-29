'use strict';

const ul = document.querySelector('ul');
const lists = [...ul.children];

function sortList(list) {
  const sortedList = list.sort((a, b) =>
    Number(b.dataset.salary.split('$').join('').split(',').join('')
    - Number(a.dataset.salary.split('$').join('').split(',').join('')))
  );

  ul.append(...sortedList);
}

function getEmployees(list) {
  return list.map(item => ({
    name: item.innerText,
    ...item.dataset,
  }));
}

sortList(lists);
getEmployees(lists);
