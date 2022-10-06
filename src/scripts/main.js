'use strict';

const employeesList = [...document.getElementsByTagName('li')]
  .map(item => [item.innerText, { ...item.dataset }]);

function sortList(list) {
  list.sort((a, b) => (+b[1].salary.slice(1)
    .split(',').join('')) - (+a[1].salary.slice(1).split(',').join('')));

  return list;
};

function getEmployees(list) {
  const objectArray = [];

  for (const item of list) {
    objectArray.push(item[1]);
    objectArray[objectArray.length - 1].name = item[0];
  };

  return objectArray;
}

sortList(employeesList);
getEmployees(employeesList);
