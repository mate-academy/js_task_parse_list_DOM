'use strict';

// write code here
const arr = document.querySelector('ul');
const listItems = [...arr.children];

function sortList(list) {
  list.sort((firstItem, secondItem) =>
    secondItem.dataset.salary.split('$').join('').split(',').join('')
    - firstItem.dataset.salary.split('$').join('').split(',').join(''));
  arr.append(...list);

  return arr;
}

function getEmployees(employees) {
  return employees.map((item) => {
    return {
      name: `${item.innerText}`,
      position: `${item.dataset.position}`,
      salary: `${item.dataset.salary}`,
      age: `${item.dataset.age}`,
    };
  });
}

sortList(listItems);
getEmployees(listItems);
