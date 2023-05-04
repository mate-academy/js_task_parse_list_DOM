'use strict';

// write code here

const peopleList = [...document.querySelectorAll('li')];

function toNumber(str) {
  return +str.replace(/[^\d]/g, '');
}

function sortList(list) {
  list.sort((item1, item2) => {
    const { salary: salary1 } = item1.dataset;
    const { salary: salary2 } = item2.dataset;

    return toNumber(salary2) - toNumber(salary1);
  });

  document.querySelector('ul').append(...list);
}

function getEmployee(list) {
  return [...list].map(person => ({
    name: person.textContent.trim(),
    ...person.dataset,
  }));
}

sortList(peopleList);
getEmployee(peopleList);
