'use strict';

const employees = document.querySelectorAll('li');
const listWithEmp = document.querySelector('ul');

function getEmployyees(list) {
  const result = list.map((e) => ({
    name: e.textContent.trim(),
    position: e.dataset.position,
    salary: +e.dataset.salary.slice(1).split(',').join(''),
    age: e.dataset.age,
  }));

  return [...result];
}

const toNum = (str) => +str.slice(1).split(',').join('');

function sortList(list) {
  list.sort((a, b) => toNum(b.dataset.salary) - toNum(a.dataset.salary));

  listWithEmp.append(...list);

  return list;
}

sortList([...employees]);
getEmployyees([...employees]);
