'use strict';

const employeesCollection = [...document.querySelectorAll('li')];
const ulElement = document.querySelector('ul');

const convertToNumber = number =>
  Number(number.split('').filter(num => !isNaN(num)).join(''));

const sortList = list => {
  const result = list.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));

  ulElement.append(...result);
};

const getEmployees = list => sortList(list).map(({ textContent, dataset }) => ({
  ...dataset,
  name: textContent,
}));

sortList(employeesCollection);

getEmployees(employeesCollection);
