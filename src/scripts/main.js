'use strict';

const employees = document.querySelector('ul');

const toNumber = string => +string.replace(/\D/g, '');

const sortList = list => {
  const users = [...list.children];

  users.sort((user1, user2) => {
    return toNumber(user2.dataset.salary) - toNumber(user1.dataset.salary);
  });

  list.append(...users);
};

const getEmployees = (list) => {
  const users = [...list.children];

  return users.map(user => ({
    name: user.innerText,
    position: user.dataset.position,
    salary: user.dataset.salary,
    age: user.dataset.age,
  }));
};

sortList(employees);

getEmployees(employees);
