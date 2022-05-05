'use strict';

const collection = document.querySelector('ul');
const list = [...collection.children];

const convert = (salary) => +salary.slice(1).split(',').join('');

function sortList(arr) {
  const sortedList = arr.sort((small, big) => (
    convert(big.dataset.salary) - convert(small.dataset.salary)
  ));

  collection.append(...sortedList);
}

function getEmployees(arr) {
  return arr.map(employee => (
    {
      name: employee.innerText,
      ...employee.dataset,
    }
  ));
}

sortList(list);
getEmployees(list);
