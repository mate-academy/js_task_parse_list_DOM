'use strict';

function convertToNumber(string) {
  return +string.replaceAll(/[$,]/g, '');
}

const listOfEmployees = document.querySelector('ul');

function sortList(list) {
  const arrayOfListItems = [...list.children];

  const sortedItems = arrayOfListItems.sort((a, b) => {
    return convertToNumber(b.dataset.salary)
      - convertToNumber(a.dataset.salary);
  });

  list.innerHTML = '';

  sortedItems.forEach(item => list.append(item));
};

function getEmployees(list) {
  const arrayOfListItems = [...list.children];

  return arrayOfListItems.map(item => {
    const obj = {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    return obj;
  });
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
