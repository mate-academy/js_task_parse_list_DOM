'use strict';

const getParentList = document.querySelector('ul');
const childrentList = [...document.querySelectorAll('[data-salary]')];

function sortList(listChildren) {
  const sortedList = listChildren.sort((a, b) =>
    replacementSigns(b.dataset.salary) - replacementSigns(a.dataset.salary));

  getParentList.append(...sortedList);
}

function replacementSigns(string) {
  return string.replace('$', '').replace(',', '');
}

function getEmployees(listChildren) {
  const listOfEmployees = listChildren.map(person => (
    {
      name: person.innerText,
      ...person.dataset,
    }
  ));

  return listOfEmployees;
}

sortList(childrentList);
getEmployees(childrentList);
