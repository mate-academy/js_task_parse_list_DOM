'use strict';

// write code here
const listElements = [...document.querySelectorAll('li')];
const listElement = document.querySelector('ul');

function sortList(list) {
  list.sort(
    (a, b) =>
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary),
  );

  list.forEach((value) => {
    listElement.appendChild(value);
  });
}

function convertToNumber(N) {
  return Number(N.replace('$', '').replace(',', ''));
}

function getEmployees(list) {
  const employeesArr = list.reduce((acc, el) => {
    const employee = {
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: convertToNumber(el.dataset.salary),
      age: Number(el.dataset.age),
    };

    acc.push(employee);

    return acc;
  }, []);

  return employeesArr;
}

// const employees = getEmployees(listElements);
// commented because linter print error

getEmployees(listElements);
sortList(listElements);
