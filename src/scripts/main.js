'use strict';

const list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

function getEmployees(peopleFromList) {
  const peopleData = [];

  peopleFromList.forEach(person => {
    peopleData.push(
      {
        name: person.textContent.trim(),
        position: person.getAttribute('data-position'),
        salary: convertToNumber(person.getAttribute('data-salary')),
        age: person.getAttribute('data-age'),
      }
    );
  });

  return peopleData;
}

function sortList(arrToSort) {
  return arrToSort.sort((a, b) => b.salary - a.salary);
}

const sortedPeople = sortList(getEmployees(listItems));

function printOnPage(data) {
  const nf = new Intl.NumberFormat('en-US');

  list.innerHTML = `
    ${data.map(item =>
    `<li
        data-position="${item.position}"
        data-salary="$${nf.format(item.salary)}"
        data-age="${item.age}"
      >
      ${item.name}
    </li>`
  ).join('')}
`;
}

function convertToNumber(str) {
  let number = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '$' || str[i] === ',') {
      continue;
    } else {
      number += str[i];
    }
  }

  return +number;
}

printOnPage(sortedPeople);
