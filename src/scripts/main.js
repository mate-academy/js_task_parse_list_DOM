'use strict';

const ul = document.querySelector('ul');
const elements = document.querySelectorAll('li');

function sortList(list) {
  return list
    .sort((empl1, empl2) => {
      const empl1Salary = +empl1.dataset['salary']
        .replace('$', '')
        .replace(',', '');
      const empl2Salary = +empl2.dataset['salary']
        .replace('$', '')
        .replace(',', '');

      return empl2Salary - empl1Salary;
    })
    .forEach((employee) => ul.appendChild(employee));
}

function getEmployees(list) {
  return list.map((person) => {
    return {
      name: person.textContent,
      position: person.dataset.position,
      salary: person.dataset['salary'],
      age: person.dataset['age'],
    };
  });
}

sortList([...elements]);
getEmployees([...elements]);
