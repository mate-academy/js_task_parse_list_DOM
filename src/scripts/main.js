'use strict';

// write code here
const peopleList = [...document.querySelectorAll('li')];
const ulList = document.querySelector('ul');

function convertToNumber(str) {
  const cleanStr = str
    .split('')
    .filter((ch) => (ch >= '0' && ch <= '9') || ch === '.')
    .join('');

  return parseFloat(cleanStr);
}

function sortList(element) {
  const sortedList = element.sort((a, b) => {
    const salary1 = convertToNumber(a.getAttribute('data-salary'));
    const salary2 = convertToNumber(b.getAttribute('data-salary'));

    return salary2 - salary1;
  });

  ulList.innerHTML = '';

  sortedList.forEach((li) => {
    ulList.append(li);
  });
}

function getEmployees(element) {
  const arrayOfEmployees = [];

  element.forEach((item) => {
    // eslint-disable-next-line no-shadow
    const name = item.innerText;
    const position = item.getAttribute('data-position');
    const salary = item.getAttribute('data-salary');
    const age = item.getAttribute('date-age');

    const employees = {
      name,
      position,
      salary,
      age,
    };

    arrayOfEmployees.push(employees);
  });

  return arrayOfEmployees;
}

sortList(peopleList);

getEmployees(peopleList);
