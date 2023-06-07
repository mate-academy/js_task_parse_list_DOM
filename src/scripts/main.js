'use strict';

const list = document.querySelector('ul');

function sortList(roster) {
  let rosterItems = roster.querySelectorAll('li');

  [...rosterItems] = [...rosterItems].sort((a, b) => {
    const numberA = convertToNumber(a.dataset.salary);
    const numberB = convertToNumber(b.dataset.salary);

    return numberB - numberA;
  });

  for (const item of [...rosterItems]) {
    roster.append(item);
  }
}

function convertToNumber(a) {
  return +a.slice(1).split(',').join('');
}

function getEmployees(roster) {
  const result = [];
  const rosterItems = roster.querySelectorAll('li');

  for (let index = 0; index < [...rosterItems].length; index++) {
    const currentItem = [...rosterItems][index];

    result.push(
      {
        name: currentItem.innerText,
        position: index,
        salary: currentItem.dataset.salary,
        age: currentItem.dataset.age,
      }
    );
  }

  return result;
}

sortList(list);
getEmployees(list);
