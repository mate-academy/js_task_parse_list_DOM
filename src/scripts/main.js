'use strict';

function sortList(usersList) {
  const sortedUsers = [...usersList.children].sort(
    (a, b) => salToNum(a.dataset.salary) - salToNum(b.dataset.salary)
  );

  for (const user of sortedUsers) {
    usersList.append(user);
  }
}

function salToNum(str) {
  return +str.replace('$', '').split(',').join('');
}

function getEmployees(usersList) {
  return [...usersList.children].map(
    user => (
      {
        name: user.innerText,
        ...user.dataset,
      }
    )
  );
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
