'use strict';

const myList = document.querySelector('ul');

function sortList(listToSort) {
  if (!listToSort) {
    return;
  }

  const listItems = Array.from(listToSort.querySelectorAll('li'));

  listItems.sort((a, b) => {
    const salaryA = parseNumber(a.getAttribute('data-salary'));
    const salaryB = parseNumber(b.getAttribute('data-salary'));

    if (salaryA === null || salaryB === null) {
      return 0;
    }

    return salaryB - salaryA;
  });

  listToSort.innerHTML = '';
  listItems.forEach((item) => listToSort.appendChild(item));
}

function getEmployees(listToProcess) {
  if (!listToProcess) {
    return [];
  }

  const employeesArray = Array.from(listToProcess.querySelectorAll('li'))
    .map((element) => {
      const salaryNumber = parseNumber(element.getAttribute('data-salary'));
      const ageNumber = parseNumber(element.getAttribute('data-age'));

      return {
        name: element.textContent.trim(),
        position: element.getAttribute('data-position'),
        salary: salaryNumber,
        age: ageNumber,
      };
    })
    .filter((employee) => employee !== null);

  return employeesArray;
}

function parseNumber(numberString) {
  if (!numberString) {
    return null;
  }

  const cleanedNumber = numberString.replace(/[$,]/g, '');
  const parsedNumber = parseFloat(cleanedNumber);

  return isNaN(parsedNumber) ? null : parsedNumber;
}

sortList(myList);
getEmployees(myList);
