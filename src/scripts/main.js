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
  const employeeList = [];

  userList.forEach((employee) => {
    const userName = employee.innerText;
    const position = employee.dataset.position;
    const salary = employee.dataset.salary;
    const age = employee.dataset.age;

    const newUser = {
      name: userName,
      position,
      salary,
      age,
    };

    employeeList.push(newUser);
  });

  return employeeList;
}

const sortedUsers = sortList(users);

getEmployees(users);

sortedUsers.forEach((user) => list.appendChild(user));
