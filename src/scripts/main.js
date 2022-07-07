'use strict';

const listOfEmployees = document.querySelector('ul');

const convertToNumber = (number) =>
  +number.split('$').join('').split(',').join('');

function sortList(list) {
  const listItems = list.querySelectorAll('li');
  const sortedArr = [...listItems].sort((user1, user2) => {
    return convertToNumber(user2.dataset.salary)
      - convertToNumber(user1.dataset.salary);
  });

  sortedArr.forEach(user => list.append(user));
};

function getEmployees(list) {
  const listItems = list.querySelectorAll('li');

  return [...listItems].map(user => ({
    name: user.innerText,
    position: user.dataset.position,
    salary: user.dataset.salary,
    age: user.dataset.age,
  }));
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
