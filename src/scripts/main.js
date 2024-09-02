'use strict';

const listItems = Array.from(document.querySelectorAll('li'));
const employeeList = document.querySelector('ul');

function convertCurrencyToNumber(currencyString) {
  const numericString = currencyString.replace(/[$,]/g, '').trim();

  return parseInt(numericString, 10);
}

function sortList(list) {
  return list.sort((itemA, itemB) => {
    const salaryA = convertCurrencyToNumber(itemA.dataset.salary);
    const salaryB = convertCurrencyToNumber(itemB.dataset.salary);

    return salaryB - salaryA;
  });
}

const sortedItems = sortList(listItems);

employeeList.append(...sortedItems);

function getEmployees(list) {
  return list.map((item) => {
    const { position, salary, age } = item.dataset;

    return {
      name: item.textContent.trim(),
      position,
      salary,
      age,
    };
  });
}

getEmployees(sortedItems);
