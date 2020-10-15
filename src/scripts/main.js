'use strict';

const listElements = [...document.querySelectorAll('li')];

function sortList(list) {
  const convertToNumber = (string) => {
    const number = Number(string.slice(1).split(',').join(''));

    return number;
  };

  const sortedList = list.sort((a, b) => (
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)
  ));

  document.querySelector('ul').append(...sortedList);
}

function getEmployees(list) {
  const employees = list.map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));

  return employees;
}

sortList(listElements);
getEmployees(listElements);
