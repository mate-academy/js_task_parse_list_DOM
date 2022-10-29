'use strict';

const listOfElements = document.querySelectorAll('li');
const rootElement = document.querySelector('ul');

function sortList(list) {
  const sortedList = [ ...list ].sort((x, y) => {
    const SalaryX = Number(x.dataset.salary.slice(1).split(',').join(''));
    const SalaryY = Number(y.dataset.salary.slice(1).split(',').join(''));

    return SalaryY - SalaryX;
  });

  sortedList.forEach(element => rootElement.append(element));
};

function getEmployees(list) {
  const listOfEmployees = [ ...list ].map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));

  return listOfEmployees;
};

sortList(listOfElements);
getEmployees(listOfElements);
