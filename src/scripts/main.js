'use strict';

const main = document.querySelector('ul');

function getNumber(str) {
  return +str.split('$').join('').split(',').join('');
};

function solrtList(list) {
  const sortedList = [...list.children].sort((cur, next) => {
    return getNumber(next.dataset.salary) - getNumber(cur.dataset.salary);
  });

  main.append(...sortedList);
}

function getEmployees(list) {
  const res = [];

  for (const el of [...list.children]) {
    res.push({
      name: el.innerText,
      postision: el.dataset.postision,
      salary: el.dataset.salary,
      age: el.dataset.age,
    });
  }

  return res;
}

solrtList(main);
getEmployees(main);
