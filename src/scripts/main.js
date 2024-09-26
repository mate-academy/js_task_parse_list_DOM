'use strict';

const list = document.querySelector('ul');

function getNumberFrom(element) {
  return +element.dataset.salary.replace(/\$|,/g, '');
}

function sortList(listOfElements) {
  const itemElements = listOfElements.querySelectorAll('li');

  const sortedElements = [...itemElements].sort(
    (element1, element2) => getNumberFrom(element2) - getNumberFrom(element1)
  );

  listOfElements.append(...sortedElements);
}

function getEmployees(listOfElements) {
  const itemElements = listOfElements.querySelectorAll('li');

  return [...itemElements].map(element => {
    const { position, salary, age } = element.dataset;

    return {
      name: element.textContent.trim(),
      position,
      salary,
      age,
    };
  });
}

sortList(list);
getEmployees(list);
