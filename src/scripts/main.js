'use strict';

const normalize = str => Number(str.replace(/[$,]/g, ''));
const userList = [...document.querySelectorAll('li')];

function sortList(list) {
  userList[0].parentNode.append(...userList.sort((a, b) => {
    return normalize(b.dataset.salary) - normalize(a.dataset.salary);
  }));
}

function getEmployees(list) {
  return userList.map(user => {
    return {
      name: user.textContent.trim(),
      ...user.dataset,
    };
  });
}

sortList(userList);
getEmployees(userList);
