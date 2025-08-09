'use strict';

const listItems = document.querySelectorAll('li');

const itemsArray = Array.from(listItems);

function toNumber(str) {
  let numStr = '';

  for (const char of str) {
    if ('0123456789'.includes(char)) {
      numStr += char;
    }
  }

  return +numStr;
}

function sortList(array) {
  const sorted = [...array].sort(
    (a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary),
  );

  const ul = array[0].parentNode;

  sorted.forEach((item) => ul.appendChild(item));

  return sorted;
}

function getEmployees(array) {
  const result = [];

  for (const item of array) {
    const objItem = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    result.push(objItem);
  }

  return result;
}

sortList(itemsArray);
getEmployees(itemsArray);
