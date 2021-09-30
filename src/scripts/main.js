'use strict';

const listItems = document.querySelector('ul');
const people = [...listItems.children];

function sortList() {
  people.sort((a, b) => convert(b.dataset.salary) - convert(a.dataset.salary));

  function convert(str) {
    return +str.replace(/\D/g, '');
  }
  people.forEach(person => listItems.append(person));
}

function getEmployees() {
  const result = [];

  people.forEach(person => {
    const { dataset: { age, position, salary } } = person;

    result.push({
      name: person.innerText,
      position,
      salary,
      age,
    });
  });

  return result;
}

sortList();
getEmployees();
