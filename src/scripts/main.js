'use strict';

function sortList(list) {
  function toNumber(num) {
    return Number(num.dataset.salary.replace(/[$,]/g, ''));
  }

  const sortedList = [...list].sort((a, b) =>
    toNumber(b) - toNumber(a));

  document.querySelector('ul').append(...sortedList);
}

function getEmployees(list) {
  return [...list].reduce((accumulator, currentValue) => {
    const { position, salary, age } = currentValue.dataset;

    accumulator.push({
      position,
      salary,
      age,
      name: currentValue.innerText,
    });

    return accumulator;
  }, []);
}

const allListItems = document.querySelectorAll('li');

sortList(allListItems);
getEmployees(allListItems);
