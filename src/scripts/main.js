'use strict';

// write code here
// debugger;

const employees = [...document.querySelectorAll('li')];

function sortlist(list) {

  function convertToNumber(str) {
    const cleanStr = str.replace(/,|\$/g, '');
    return Number(cleanStr);
  }

  list.sort((a,b) => convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary));

  document.querySelector('ul').append(...list);
}

function getEmployees(list) {
  const employeesArr = [];

  for (let person of list) {
    const personData = {
      name: person.innerHTML.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    }

    employeesArr.push(personData);
  }

  return employeesArr;
}

sortlist(employees);
getEmployees(employees);
