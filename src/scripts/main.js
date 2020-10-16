'use strict';

// write code here
// debugger;

const employees = [...document.querySelectorAll('li')];

function sortlist(list) {
  function convertToNumber(str) {
    const cleanStr = str.replace(/,|\$/g, '');

    return Number(cleanStr);
  }

  list.sort((a, b) =>
    convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary)
  );

  document.querySelector('ul').append(...list);
}

function getEmployees(list) {
  const employeesArr = list.map(person => {
    return {
      name: person.innerHTML.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });

  return employeesArr;
}

sortlist(employees);
getEmployees(employees);
