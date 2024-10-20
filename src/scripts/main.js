'use strict';

const bodyElement = document.body;

const dataSalary = [...bodyElement.querySelectorAll('li[data-salary]')];
const listPeople = [...bodyElement.querySelectorAll('li')];

const salaries = dataSalary
  .map((elem) => +elem.getAttribute('data-salary').replace(/[$,]+/g, ''))
  .sort((a, b) => b - a);

const sortedArray = [];

function sortList(list) {
  for (let i = 0; i < list.length; i++) {
    const salary = salaries[i];

    const person = list.filter(
      (elem) =>
        +elem.getAttribute('data-salary').replace(/[$,]+/g, '') === salary,
    );

    person.forEach((elem) => {
      if (!sortedArray.includes(elem.textContent)) {
        sortedArray.push(elem.textContent);
      }
    });
  }
}

function getEmployees(list) {
  for (let i = 0; i < list.length; i++) {
    list[i].textContent = sortedArray[i] || '';
  }
}

sortList(listPeople);
getEmployees(listPeople);
