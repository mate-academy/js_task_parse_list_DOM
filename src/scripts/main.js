'use strict';

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

function getEmployees(element) {
  [...element].map(person => ({
    ...person,
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

function sortList(element) {
  const sortedList = [...element].sort((next, current) => {
    const converterCurrent
    = current.dataset.salary.replace('$', '').replace(',', '');
    const convereterNext
      = next.dataset.salary.replace('$', '').replace(',', '');

    return converterCurrent - convereterNext;
  });

  list.append(...sortedList);
}

sortList(listItems);
getEmployees(listItems);
