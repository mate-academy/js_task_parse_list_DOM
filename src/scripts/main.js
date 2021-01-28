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
  list.sort((a, b) => {
    if (toNum(a.dataset.salary) > toNum(b.dataset.salary)) {
      return -1;
    }

    if (toNum(a.dataset.salary) < toNum(b.dataset.salary)) {
      return 1;
    }

    if (toNum(a.dataset.salary) === toNum(b.dataset.salary)) {
      return 0;
    }
  });

  for (const e of list) {
    listWithEmp.append(e);
  }

  return list;
}

sortList([...employees]);
getEmployyees([...employees]);
