'use strict';

const initialList = document.querySelector('ul');
const employees = [...initialList.children];

function toNumber(str) {
  return str.replace('$', '').replace(',', '');
}

function sortList(list) {
  const sortedList = list.sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  initialList.append(...sortedList);
}

function getEmployees(list) {
  return list.map(person => (
    {
      name: person.innerText,
      ...person.dataset,
    }
  ));
}

sortList(employees);
getEmployees(employees);
