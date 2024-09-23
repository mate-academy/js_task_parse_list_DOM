'use strict';

const dataList = [...document.querySelectorAll('li')];

function stringToNum(string) {
  return Number(string.replace('$', '').replace(',', ''));
}

function sortList(list) {
  list.sort((a, b) => {
    return stringToNum(b.dataset.salary) - stringToNum(a.dataset.salary);
  });

  const ul = document.querySelector('ul');

  list.forEach((el) => ul.appendChild(el));
}

function getEmployees(list) {
  return list.map((el) => {
    return {
      name: el.textContent,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });
}

sortList(dataList);
getEmployees(dataList);
