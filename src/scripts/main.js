'use strict';

const arr = [];

document.querySelectorAll('li').forEach((item) => {
  arr.push(item);
});

const sortList = () => {
  return arr
    .map((item) => ({
      element: item,
      text: item.textContent,
      salary: Number(item.getAttribute('data-salary').replace(/[$,]/g, '')),
    }))
    .sort((a, b) => b.salary - a.salary);
};

const getEmployees = () => {
  return arr.map((item) => ({
    text: item.textContent,
    salary: item.textContent,
    age: item.getAttribute('data-age'),
    position: item.getAttribute('data-position'),
  }));
};

const sortedList = sortList();

const ul = document.querySelector('ul');

ul.innerHTML = '';

sortedList.forEach((item) => {
  ul.appendChild(item.element);
});

getEmployees();
