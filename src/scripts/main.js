'use strict';

const itemsList = [...document.querySelectorAll('li')];
const itemUl = document.querySelector('ul');

function afterSorted(value) {
  return +value.dataset.salary.slice(1).replace(',', '');
}

const sortList = list => {
  const sorted = list.sort((personA, personB) => (
    afterSorted(personB) - afterSorted(personA)
  ));

  itemUl.append(...sorted);
};

const getEmployees = list => {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};

sortList(itemsList);
getEmployees(itemsList);
