'use strict';

const personList = document.querySelectorAll('li');
const personCollection = document.querySelector('ul');
const employeeSorted = sortList(personList);

function convertToNumber(value) {
  return +value.replace(/[^0-9.]/g, '');
}

function sortList(list) {
  return [...list].sort((current, next) => convertToNumber(next.dataset.salary)
   - convertToNumber(current.dataset.salary)
  );
}

function getEmployes(list) {
  return [...list].map(
    person => {
      return {
        ...person.dataset,
        name: person.innerText,
      };
    }
  );
};

getEmployes(employeeSorted);

personCollection.append(...employeeSorted);
