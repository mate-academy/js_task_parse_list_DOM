'use strict';

// const list = document.querySelector('ul');
// const listItems = [...document.querySelectorAll('li')];

// function toNumber(string) {
//   return string.replace('$', '').replace(',', '');
// }

// function sortList(listSalary) {
//   listSalary.sort((el1, el2) =>
//     toNumber(el1.dataset.salary) - toNumber(el2.dataset.salary));
//   list.append(...listSalary);
// }

const list = document.querySelector('ul');
const listItems = [...document.querySelectorAll('li')];

function toNumber(string) {
  return string.replace('$', '').replace(',', '');
}

function sortBySalary(listSalary) {
  listSalary.sort((el1, el2) =>
    toNumber(el2.dataset.salary) - toNumber(el1.dataset.salary));
  list.append(...listSalary);
}

function getEfficiees(property) {
  return property.map(person => {
    person.name = person.textContent;
    person.position = person.dataset.position;
    person.salary = person.dataset.salary;
    person.age = person.dataset.age;
  });
};

sortBySalary(listItems);
getEfficiees(listItems);
