'use strict';

function sortList(list) {
  const users = [...list.children];

  users.sort((userOne, userTwo) =>
    toNumber(userTwo.dataset.salary)
    - toNumber(userOne.dataset.salary));

  list.append(...users);
}

const toNumber = (string) => +string.replace(/\D/g, '');

function getEmployees(list) {
  const users = [...list.children];

  return users.map(user =>
    ({
      name: user.innerText,
      position: user.dataset.position,
      salary: user.dataset.salary,
      age: user.dataset.age,
    })
  );
}

const employees = document.querySelector('ul');

sortList(employees);

getEmployees(employees);
