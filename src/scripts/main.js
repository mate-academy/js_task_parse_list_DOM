'use strict';

const usersArray = [...document.querySelectorAll('[data-salary]')];
const usersList = document.querySelector('ul');

function stringToInt(string) {
  return parseInt(string);
}

function sortListOfSalary(usersArrayForSort) {
  return usersArrayForSort.sort((a, b) => {
    const salaryA = stringToInt(
      a.dataset.salary.replace('$', '').replace(',', ''),
    );
    const salaryB = stringToInt(
      b.dataset.salary.replace('$', '').replace(',', ''),
    );

    return salaryB - salaryA;
  });
}

sortListOfSalary(usersArray);

function createEmployeesArray(sortsArray) {
  usersList.innerHTML = '';

  sortsArray.forEach((user) => {
    const li = document.createElement('li');

    li.textContent = user.textContent;
    li.dataset.position = user.dataset.position;
    li.dataset.age = user.dataset.age;

    usersList.appendChild(li);
  });
}

createEmployeesArray(sortListOfSalary(usersArray));
