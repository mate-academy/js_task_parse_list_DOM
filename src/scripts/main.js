'use strict';

const list = document.querySelector('ul');
const items = document.querySelectorAll('li');

function sortList(parameters) {
  return [...parameters].sort(
    (a, b) => +b.dataset.salary.replace(/[$,]/g, '') - +a.dataset.salary
      .replace(/[$,]/g, ''));
}

function getEmployees(parameters) {
  return parameters.reduce(
    (accumulator, parameter) => {
      accumulator.push({
        name: parameter.textContent.trim(),
        position: parameter.dataset.position,
        salary: parameter.dataset.salary,
        age: parameter.dataset.age,
      });

      return accumulator;
    }, []);
}

const output = getEmployees(sortList(items));
const convertToString = output.map(
  a => `<li data-position='${a.position}' data-salary='${a.salary}'`
    + `data-age='${a.age}'> ${a.name}</li>`).join('');

list.innerHTML = convertToString;
