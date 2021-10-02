'use strict';

const listLi = document.querySelectorAll('li');
const ulItem = document.querySelector('ul');

const sortList = list => {
  return [...list].sort((a, b) =>
    +b.dataset.salary.replace(/[$,]/, '')
    - +a.dataset.salary.replace(/[$,]/, ''));
};

const sorted = sortList(listLi);

for (const item of sorted) {
  ulItem.append(item);
}

const getEmployees = list => {
  return [...list].map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};

sortList(listLi);
getEmployees(listLi);
