'use strict';

const employees = document.querySelector('ul');

const stringToNumber = (str) => {
  return str.slice(1).split(',').join('');
};

const sortList = (list) => {
  const childrenList = [...list.children];

  return childrenList.sort((a, b) => stringToNumber(b.dataset.salary)
  - stringToNumber(a.dataset.salary));
};
const sortedEmployees = sortList(employees);

employees.append(...sortedEmployees);

const getEmployees = (list) => {
  const childrenList = [...list.children];
  const rightObjects = [];

  for (let i = 0; i < childrenList.length; i++) {
    rightObjects.push(
      {
        name: childrenList[i].innerText,
        position: childrenList[i].dataset.position,
        salary: childrenList[i].dataset.salary,
        age: childrenList[i].dataset.age,
      }
    );
  }
};

sortList(employees);
getEmployees(employees);
