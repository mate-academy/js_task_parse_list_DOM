'use strict';

const list = document.querySelector('ul');

function sortList(listOfElements) {
  const itemElements = listOfElements.querySelectorAll('li');

  const sortedElements = [...itemElements].sort(
    (element1, element2) => +element2.dataset.salary.replace(/\$|,/g, '')
      - +element1.dataset.salary.replace(/\$|,/g, '')
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
