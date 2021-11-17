'use strict';

const list = document.querySelectorAll('li');

function filterCallback(element) {
  return +(element.dataset.salary.replace('$', '').replace(',', ''));
}

function sortList(people) {
  const ulSort = document.querySelector('ul');

  const sortPeople = [...people].sort((human1, human2) =>
    filterCallback(human2) - filterCallback(human1));

  for (const item of sortPeople) {
    ulSort.append(item);
  }
}

function getEmployees(listOfEmployees) {
  const employ = [...listOfEmployees].map(el => ({
    name: el.innerText,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));

  return employ;
}

sortList(list);
getEmployees(list);
