/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
'use strict';

const temp = document.querySelectorAll('li');
const ulik = document.querySelector('ul');

function separateAuxiliaryFunction(noInt) {
  const rez = parseInt(noInt.replace(/[^0-9]/g, ''));

  return rez;
}

function sortList(list) {
  let sortedList = [];

  for (const i of list) {
    const objects = {};
    const tempSelary = i.dataset.salary;
    const tmp = separateAuxiliaryFunction(tempSelary);

    objects.salary = tmp;
    objects.name = i.textContent.trim();
    objects.age = i.dataset.age;
    objects.position = i.dataset.position;
    objects.elem = i;

    sortedList.push(objects);
  }

  ulik.innerHTML = '';
  sortedList = sortedList.sort((a, b) => b.salary - a.salary);
  sortedList.forEach((item) => ulik.appendChild(item.elem));

  return sortedList;
}

const actionOwo = sortList(temp);


function getEmployees(list) {
  const sortedList = [];

  for (const i of list) {
    const objects = {};
    const tempSelary = i.dataset.salary;
    const tmp = separateAuxiliaryFunction(tempSelary);

    objects.salary = tmp;
    objects.name = i.textContent.trim();
    objects.age = i.dataset.age;
    objects.position = i.dataset.position;

    sortedList.push(objects);
  }

  return sortedList;
}

const actionTwo = getEmployees(temp);
