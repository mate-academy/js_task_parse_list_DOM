'use strict';

const callList = document.querySelector('ul');

function sortList(list) {
  const sortSalary = [...list.children].sort((a, b) =>
    b.dataset.salary.replace('$', '').replace(',', '')
 - a.dataset.salary.replace('$', '').replace(',', ''));

  list.append(...sortSalary);
};
sortList(callList);

function getEmployees(list) {
  const resultArray = [];

  for (let i = 0; i < list.children.length; i++) {
    const resultObject = {};

    resultObject.name = list.children[i].innerText;
    resultObject.position = list.children[i].dataset.position;
    resultObject.salary = list.children[i].dataset.salary;
    resultObject.age = list.children[i].dataset.age;
    resultArray.push(resultObject);
  };

  return resultArray;
};
getEmployees(callList);
