'use strict';

const personUl = document.querySelector('ul');
const personList = [...personUl.children];

function sortList(list) {
  const sortedEmployees = list.sort((a, b) => {
    return (convertSalaryToNumber(b.dataset.salary)
      - convertSalaryToNumber(a.dataset.salary));
  });

  for (const employee of sortedEmployees) {
    personUl.insertAdjacentElement('beforeend', employee);
  }
}

function getEmployees(list) {
  const employees = list.map(elem => {
    return {
      name: elem.innerText,
      position: elem.dataset.position,
      salary: elem.dataset.salary,
      age: elem.dataset.age,
    };
  });

  return employees;
}

function convertSalaryToNumber(str) {
  const corectNumb = str.slice(1).split(',').join('');

  return corectNumb;
};

sortList(personList);
getEmployees(personList);
