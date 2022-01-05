'use strict';

const list = document.querySelector('ul');

const sortList = () => {
  const sorted = [...list.children].sort((prev, next) =>
    +next.dataset.salary.match(/[0-9]/g).join('')
    - (+prev.dataset.salary.match(/[0-9]/g).join(''))
  );

  for (const el of sorted) {
    list.append(el);
  }
};

const getEmployees = () => {
  const arrOfObjecs = [...list.children].map(el => ({
    name: el.textContent,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));

  return arrOfObjecs;
};

sortList();
getEmployees();
