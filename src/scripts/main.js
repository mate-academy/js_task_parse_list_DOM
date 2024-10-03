'use strict';

import { parseAmount } from './helpers.js';

const listOfEmployes = [...document.querySelectorAll('li')];

function sortList(list) {
  const sortedList = list.sort(
    (emloyeA, employeB) =>
      parseAmount(employeB.dataset.salary) -
      parseAmount(emloyeA.dataset.salary),
  );

  const ul = list[0].parentNode;

  sortedList.forEach((item) => ul.appendChild(item));
}

function getEmployees(list) {
  const arrayOfEmployee = list.reduce((arr, item) => {
    arr.push({
      name: item.innerText,
      ...item.dataset,
    });

    return arr;
  }, []);

  return arrayOfEmployee;
}

sortList(listOfEmployes);
getEmployees(listOfEmployes);
