'use strict';

// write code here
const employList = document.querySelectorAll('li');
const ul = document.querySelector('ul');

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((user1, user2) => {
    const salary1 = +user1.getAttribute('data-salary').replace(/[^0-9]+/g, '');
    const salary2 = +user2.getAttribute('data-salary').replace(/[^0-9]+/g, '');

    return salary2 - salary1;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const usersList = [];

  for (const li of list) {
    const users = {};

    users.name = li.textContent.trim();
    users.position = li.getAttribute('data-position');
    users.salary = li.getAttribute('data-salary');
    users.age = li.getAttribute('data-age');
    usersList.push(users);
  }

  return usersList;
}

sortList(ul);
getEmployees(employList);
