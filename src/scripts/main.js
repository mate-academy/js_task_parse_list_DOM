'use strict';

// write code here
const arr = document.querySelector('ul');
const elements = [...arr.children];

function sortList(list) {
  return list.sort((firstItem, secondItem) => {
    return (
      secondItem.dataset.salary.replace(/[^0-9]/gm, '')
    - firstItem.dataset.salary.replace(/[^0-9]/gm, '')
    );
  }).map((item) => arr.append(item));
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

sortList(elements);
getEmployees(elements);
