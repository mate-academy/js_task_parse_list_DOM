'use strict';

const list = document.querySelector('ul');
const listItems = [...list.children];

function makeNumber(salaryStr) {
  return +salaryStr.split('$').join('').split(',').join('');
}

function sortList(listProperty) {
  const sortedList = listProperty.sort((person1, person2) =>
    makeNumber(person2.dataset.salary) - makeNumber(person1.dataset.salary)
  );

  list.append(...sortedList);
}

function getEmployees(listProperty) {
  return listProperty.map(item => ({
    name: item.innerText,
    ...item.dataset,
  }));
}

sortList(listItems);
getEmployees(listItems);
