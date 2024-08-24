'use strict';

const dataList = [...document.querySelectorAll('li')];

function sortList(list) {
  const ul = document.querySelector('ul');

  list.forEach((el) => {
    el.dataset.salary = el.dataset.salary.replace(/[$,]/g, '');
  });

  list.sort((a, b) => Number(b.dataset.salary) - Number(a.dataset.salary));

  list.forEach((el) => ul.append(el));
}

function getEmployees(list) {
  return list.map((el) => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

sortList(dataList);
getEmployees(dataList);
