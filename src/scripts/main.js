'use strict';

const items = document.querySelectorAll('li');
const list = document.querySelector('ul');

function convertNumber(str) {
  const newStr = str.slice(1);

  return +newStr.split(',').join('');
}

function sortList(arr) {
  const sortArr = Array.from(arr);

  sortArr.sort((a, b) => {
    const firstSalary = convertNumber(a.getAttribute('data-salary'));
    const secondSalary = convertNumber(b.getAttribute('data-salary'));

    return secondSalary - firstSalary;
  });

  for (const item of sortArr) {
    list.appendChild(item);
  }

  return sortArr;
}

function getEmployees() {
  const listOfEmployees = document.getElementsByTagName('ul')[0];
  const listItems = [...listOfEmployees.children];

  const employees = listItems.map(item => {
    return {
      name: item.innerText,
      position: item.getAttribute('data-position'),
      salary: item.getAttribute('data-salary'),
      age: item.getAttribute('data-age'),
    };
  });

  return employees;
}

sortList(items);
getEmployees(items);
