'use strict';

const listOfEmployees = document.querySelector('ul');
const items = document.querySelectorAll('li');

function sortList(list) {
  const sortedList = [...list].sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  sortedList.forEach((item) => listOfEmployees.append(item));
}

function convertToNumber(string) {
  const convertedNumber = string.slice(1).split(',').join('');

  return Number(convertedNumber);
}

sortList(items);
