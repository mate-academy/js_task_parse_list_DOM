'use strict';

const list = document.querySelector('ul');

function toNumber(input) {
  return +input.slice(1).replace(',', '');
};

function sortList(listFromHTML) {
  [...listFromHTML.children]
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary))
    .forEach(child => listFromHTML.append(child));

  return listFromHTML;
}

function getEmployees(listOfEmployees) {
  return [...listOfEmployees.children].map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

sortList(list);
getEmployees(list);
