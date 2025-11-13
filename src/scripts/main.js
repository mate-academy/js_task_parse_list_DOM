/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
'use strict';

const temp = document.querySelectorAll('li');

function getListItems(list) {
  const sortedItemList = [];

  for (const i of list) {
    const objects = {};

    objects.name = i.textContent.trim();
    objects.salary = parseInt(i.dataset.salary.replace(/[^0-9]/g, ''));
    objects.age = i.dataset.age;
    objects.position = i.dataset.position;
    objects.elem = i;

    sortedItemList.push(objects);
  }
  return sortedItemList;
}

const actionOne = getListItems(temp);
// console.log(actionOne);

const ulik = document.querySelector('ul');

function sortList(list) {

  ulik.innerHTML = '';

  list.sort((a, b) => b.salary - a.salary);
  const rez = list.forEach((item) => ulik.appendChild(item.elem));
}

const actionTwo = sortList(actionOne);
// console.log(actionTwo);

function getEmployees(list) {
  const sortedList = [];

  for (const i of list) {
    const objects = {};

    objects.name = i.textContent.trim();
    objects.salary = parseInt(i.dataset.salary.replace(/[^0-9]/g, ''));
    objects.age = i.dataset.age;
    objects.position = i.dataset.position;

    sortedList.push(objects);
  }

  return sortedList;
}

const actionThree = getEmployees(temp);
// console.log(actionThree);
