'use strict';

const list = document.querySelector('ul');
const listItems = [...document.querySelectorAll('li')];

function toNumber(string) {
  return string.replace('$', '').replace(',', '');
}

function sortList(listSalary) {
  listSalary.sort((el1, el2) =>
    toNumber(el2.dataset.salary) - toNumber(el1.dataset.salary));
  list.append(...listSalary);
}

function getEmployees(property) {
  return property.map(person => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
};

sortList(listItems);
getEmployees(listItems);
