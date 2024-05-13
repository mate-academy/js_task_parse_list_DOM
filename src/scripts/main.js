'use strict';

// write code here

const list = document.getElementsByTagName('ul')[0];
const users = Array.from(list.children);

function sortList(userList) {
  return userList.sort((a, b) => {
    const firstSalary = parseInt(
      a.dataset.salary.replace('$', '').replace(',', ''),
    );
    const secondSalary = parseInt(
      b.dataset.salary.replace('$', '').replace(',', ''),
    );

    return secondSalary - firstSalary;
  });
}

function getEmployees(userList) {
  return userList.map((employee) => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

const sortedUsers = sortList(users);

getEmployees(users);

sortedUsers.forEach((user) => list.appendChild(user));
