'use strict';

const list = document.querySelectorAll('li');
const mainList = document.querySelector('ul');

function toSort(input) {
  const sortedList = Array.from(input).sort((itm1, itm2) => {
    const person1 = itm1.dataset.salary.replace(/[$,]/g, '');
    const person2 = itm2.dataset.salary.replace(/[$,]/g, '');

    return Number(person2) - Number(person1);
  });

  sortedList.forEach((elem) => mainList.appendChild(elem));
}

function getEmployees(input) {
  return Array.from(input).map((elem) => {
    return {
      name: elem.innerText,
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    };
  });
}

toSort(list);
getEmployees(list);
