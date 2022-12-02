'use strict';

// write code here
const elementsList = Array.from(document.querySelector('ul').children);

function sortList(list) {
  const getNumber = (string) => {
    const number = Number.parseInt(string.slice(1).replace(/,/g, ''));

    return number;
  };

  list.sort((a, b) => {
    return getNumber(b.dataset.salary) - getNumber(a.dataset.salary);
  });

  list.forEach((child) => {
    document.querySelector('ul').append(child);
  });

  return list;
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
