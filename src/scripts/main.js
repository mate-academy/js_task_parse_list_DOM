'use strict';

const startList = document.querySelector('ul');
const listElements = [...document.querySelectorAll('li')];
const convertToNumber = salary => +salary.slice(1).split(',').join('');

function sortList(list) {
  const sortElem = list.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));

  startList.append(...sortElem);
};

function getEmployees(list) {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};

sortList(listElements);
getEmployees(listElements);

// #region notWorking

// const salaries = document.querySelectorAll('[data-salary]');
// const arrOfSalaries = [];

// for (const salary of salaries) {
//   arrOfSalaries.push(salary.dataset.salary);
// }

// arrOfSalaries.sort((a, b) => a.localeCompare(b));
// arrOfSalaries.sort((a, b) => a.length - b.length);

// let myArray = [...salaries];

// for (let i = salaries.length - 1; i >= 0; i--) {
//   const lowest = myArray.find(person => person.dataset.salary
//     === arrOfSalaries[i]);

//   salaries[i].innerHTML = lowest.innerHTML;

//   console.log(lowest.innerHTML);
// }

// salaries[0].innerHTML = myArray[0].innerHTML;

// for (const x of myArray) {
// }

// for (let i = 0; i < salaries.length; i++) {
//   myArray[i] = [...salaries].find(person => person.dataset.salary
//     === arrOfSalaries[i]);
// }

// myArray.reverse();

// for (let i = 0; i < salaries.length; i++) {
//   console.log(myArray[i].innerHTML);
// }

// #endregion
