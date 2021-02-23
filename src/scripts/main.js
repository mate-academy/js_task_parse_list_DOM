'use strict';

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

function getEmployees(element) {
  [...element].map(person => ({
    ...person,
    ...person.dataset,
    name: person.innerText,
  }));
}

function converter(string) {
  return string.replace('$', '').replace(',', '');
}

function sortList(element) {
  const sortedList = [...element].sort((next, current) => {
    const converterCurrent = converter(current.dataset.salary);
    const convereterNext = converter(next.dataset.salary);

    return converterCurrent - convereterNext;
  });

  list.append(...sortedList);
}

sortList(listItems);
getEmployees(listItems);
