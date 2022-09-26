'use strict';

// function returns number from a string
function salaryNumber(str) {
  return +str.slice(1).split(',').join('');
}

// function returns sorted list accending salary

function sortList(item) {
  // create empty ul tag

  const newUl = document.createElement('ul');

  // get list collection

  const list = document.querySelectorAll('li');

  // get array with a sorted list

  const sorted = [...list].sort((a, b) =>
    salaryNumber(b.dataset.salary) - salaryNumber(a.dataset.salary));

  // append sorted li tags in an empty ul

  for (const element of sorted) {
    newUl.append(element);
  }

  // append ul in a body

  document.body.append(newUl);
}

function getEmployees(list) {
  // get template for objects
  function User(userName, position, salary, age) {
    this.name = userName;
    this.position = position;
    this.salary = salary;
    this.age = age;
  }

  // get array of objects
  const listArray = [...list].map(item => new User(
    item.innerText,
    item.dataset.position,
    item.dataset.salary,
    item.dataset.age
  ));

  return listArray;
}

// get ul element with a list

const ulItem = document.getElementsByTagName('ul');

// get list collection
const listItems = document.querySelectorAll('li');

sortList(ulItem);
getEmployees(listItems);
