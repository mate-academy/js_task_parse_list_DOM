'use strict';

const employees = [...document.querySelectorAll('li')];
const sortedEmployees = sort(employees);

function sort(array) {
  function callbackSort(el1, el2) {
    const strToNumb = (str) => +str.replace(',', '').replace('$', '');
    const s1 = strToNumb(el1.dataset.salary);
    const s2 = strToNumb(el2.dataset.salary);

    return s2 - s1;
  }

  return array.sort(callbackSort);
}

function map(array) {
  function callbackMap(el) {
    return {
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  }

  return array.map(callbackMap);
}

const ul = document.querySelector('ul');

ul.innerHTML = '';
sortedEmployees.forEach((el) => ul.append(el));

map(employees);
