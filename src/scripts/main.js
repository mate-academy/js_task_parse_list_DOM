'use strict';

const userList = document.querySelector('ul');

function sortList(list) {
  const listItems = Array.from(list.children);

  listItems.sort((item1, item2) => {
    return convertToNum(item2) - convertToNum(item1);
  });

  listItems.forEach((item) => {
    userList.append(item);
  });
}

function convertToNum(user) {
  const userSalary = user.dataset.salary;
  const normalizedSalary = userSalary.replace(/\D/g, '');

  return Number(normalizedSalary);
}

function getEmployees(list) {
  const listItems = Array.from(list.children);
  const users = [];

  listItems.forEach((item) => {
    users.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    });
  });

  return users;
}

sortList(userList);
getEmployees(userList);
