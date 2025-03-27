'use strict';

const getElement = document.querySelector('ul');

const stringToNumber = (str) => {
  return Number(str.replace(/[^0-9.-]+/g, ''));
};

const sortList = (list) => {
  return Array.from(list.children)
    .sort(
      (a, b) =>
        stringToNumber(b.dataset.salary) - stringToNumber(a.dataset.salary),
    )
    .forEach((item) => list.appendChild(item));
};

const getEmployees = (list) => {
  return Array.from(list.children).map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: stringToNumber(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
};

getEmployees(getElement);
sortList(getElement);
