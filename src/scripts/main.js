'use strict';

const itemsOfEmployees = document.querySelectorAll('li');
const listOfEmployees = document.querySelector('ul');

const convertToNumber = (item) => {
  return Number(item.split(',').join('').slice(1));
};

function sortList(list) {
  const sortedList = [...list].sort((previousItem, nextItem) => {
    const convertPreviousItem = convertToNumber(previousItem.dataset.salary);
    const convertNextItem = convertToNumber(nextItem.dataset.salary);

    return convertNextItem - convertPreviousItem;
  });

  listOfEmployees.append(...sortedList);
}

function getEmployees(list) {
  return [...list].map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

sortList(itemsOfEmployees);
getEmployees(itemsOfEmployees);
