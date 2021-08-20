'use strict';

const employees = document.querySelectorAll('li');

function getNumberFromString(value) {
  const result = Number(
    value.dataset.salary.replace(/,/g, '').replace('$', '')
  );

  return result;
}

function sortList(arr) {
  const newList = arr.sort((el, nextEl) => getNumberFromString(nextEl)
  - getNumberFromString(el));

  const list = document.querySelector('ul');

  newList.map(item => list.append(item));
}

function getEmployees(arr) {
  const newList = arr.sort((el, nextEl) => getNumberFromString(nextEl)
  - getNumberFromString(el));

  return newList.reduce((prev, item) => {
    prev.name = item.innerText.trim();
    prev.position = item.dataset.position;
    prev.salary = item.dataset.salary;
    prev.age = item.dataset.age;

    return prev;
  }, {});
}

sortList([...employees]);
getEmployees([...employees]);
