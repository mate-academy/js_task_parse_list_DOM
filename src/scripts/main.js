'use strict';

// write code here
const elementsList = document.querySelector('ul').children;

function sortList(list) {
  const array = Array.from(list);
  const getNumber = (string) => {
    const number = Number.parseInt(string.slice(1).replace(/,/g, ''));

    return number;
  };

  array.sort((a, b) => {
    return getNumber(b.dataset.salary) - getNumber(a.dataset.salary);
  });

  array.forEach((child) => {
    document.querySelector('ul').append(child);
  });

  return array;
}

function getEmployees(list) {
  const employees = [];

  for (const element of list) {
    const employee = {
      name: element.innerText,
      ...element.dataset,
    };

    employees.push(employee);
  }

  return employees;
}

sortList(elementsList);
getEmployees(elementsList);
