'use strict';

// write code here
const listElement = document.querySelectorAll('li');
const employees = [...listElement];

function makeNumber(string) {
  return Number(string.attributes[1].value.replace(/\$|,/g, ''));
}

function getEmployees(list) {
  return list.sort((a, b) => makeNumber(b) - makeNumber(a));
}

getEmployees(employees);
