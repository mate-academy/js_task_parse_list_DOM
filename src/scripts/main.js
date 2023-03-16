'use strict';

const listItems = [...document.querySelectorAll('li')];

function convertToNumber(string) {
  return Number(string.split('$').join('').replaceAll(',', ''));
}

function sortList(list) {
  list.sort((a, b) => {
    return convertToNumber(b.dataset.salary)
    - convertToNumber(a.dataset.salary);
  });

  document.querySelector('ul').append(...list);
};

sortList(listItems);

function getEmployees(list) {
  list.map(item => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
};

getEmployees(listItems);
