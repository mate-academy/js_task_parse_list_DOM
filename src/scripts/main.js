'use strict';

const list = document.querySelector('ul');

function sortList(roster) {
  const rosterItems = [...roster.querySelectorAll('li')];

  const sortedItems = rosterItems.sort((a, b) => {
    const numberA = convertToNumber(a.dataset.salary);
    const numberB = convertToNumber(b.dataset.salary);

    return numberB - numberA;
  });

  sortedItems.forEach(item => roster.append(item));
}

function convertToNumber(a) {
  return +a.slice(1).split(',').join('');
}

function getEmployees(roster) {
  const result = [];
  const rosterItems = [...roster.querySelectorAll('li')];

  rosterItems.forEach((currentItem, index) => {
    result.push(
      {
        name: currentItem.innerText,
        position: index,
        salary: currentItem.dataset.salary,
        age: currentItem.dataset.age,
      }
    );
  });

  return result;
}

sortList(list);
getEmployees(list);
