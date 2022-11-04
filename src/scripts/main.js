'use strict';

const normalize = str => Number(str.replace(/[$,]/g, ''));
const userList = [...document.querySelectorAll('li')];

function sortList(list) {
  list[0].parentNode.append(...list.sort((a, b) => {
    return normalize(b.dataset.salary) - normalize(a.dataset.salary);
  }));
}

function getEmployees(list) {
  return list.map(user => {
    return {
      name: user.textContent.trim(),
      ...user.dataset,
    };
  });
}

sortList(userList);
getEmployees(userList);
