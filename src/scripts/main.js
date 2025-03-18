/* eslint-disable function-paren-newline */
'use strict';

function convertStrToNum(text) {
  return +String(text).replaceAll(/[^0-9]*/gm, '');
}

function sortList(list) {
  list.sort(
    (li1, li2) =>
      convertStrToNum(li2.dataset.salary) - convertStrToNum(li1.dataset.salary),
  );

  ulList.forEach((li) => ul.append(li));
}

function getEmployees(list) {
  const employeesArray = [];

  list.forEach((element) =>
    employeesArray.push({
      name: element.innerText,
      position: element.dataset.position,
      salary: element.dataset.salary,
      age: element.dataset.age,
    }),
  );

  return employeesArray;
}

const ul = document.querySelector('ul');
const ulList = [...ul.children];

sortList(ulList);
const employeesList = getEmployees(ulList);
// fds fs
