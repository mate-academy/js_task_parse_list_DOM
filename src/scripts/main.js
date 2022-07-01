'use strict';

const list = document.querySelector('ul');
const listItems = [...list.children];

function sortList(listProperty) {
  const sortedList = listProperty.sort((person1, person2) =>
    +(person2.dataset.salary.split('$').join('').split(',').join(''))
    - +(person1.dataset.salary.split('$').join('').split(',').join(''))
  );

  list.append(...sortedList);
}

function getEmployees(listProperty) {
  return listProperty.map(item => ({
    name: item.innerText,
    ...item.dataset,
  }));
}

sortList(listItems);
getEmployees(listItems);
