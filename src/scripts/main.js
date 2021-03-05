'use strict';

const list = document.querySelector('ul');
const employees = list.children;

function sortList(parameters) {
  return [...parameters].sort(
    (currentValue, nextValue) => {
      return +nextValue.dataset.salary.replace(/[$,]/g, '')
        - +currentValue.dataset.salary.replace(/[$,]/g, '');
    });
}

const sortedEmployees = sortList(employees);

function getEmployees(parameters) {
  return parameters.reduce(
    (accumulator, parameter) => {
      accumulator.push({
        name: parameter.textContent.trim(),
        ...parameter.dataset,
      });

      return accumulator;
    }, []);
}

getEmployees(sortedEmployees);
list.append(...sortedEmployees);
