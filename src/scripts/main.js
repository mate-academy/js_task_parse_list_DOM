'use strict';

const listOfEmployees = document.querySelector('ul');

function conversionToNumber(string) {
  const number = Number(string.split('').filter(letter =>
    letter !== ',' && letter !== '$').join(''));

  return number;
};

const sortList = (list) => {
  const listElement = [ ...list.children ];
  const sortedListElement = listElement.sort((element1, element2) =>
    conversionToNumber(element2.dataset.salary)
    - conversionToNumber(element1.dataset.salary));

  list.innerHTML = '';

  sortedListElement.map(element => list.append(element));
};

sortList(listOfEmployees);

const getEmployees = (list) => {
  const listElement = [ ...list.children ];
  const dataAllEmployees = [];

  listElement.map(element => {
    const elementName = { name: element.innerText };

    const dataElement = {
      ...elementName,
      ...element.dataset,
    };

    dataAllEmployees.push(dataElement);
  });

  return dataAllEmployees;
};

getEmployees(listOfEmployees);
