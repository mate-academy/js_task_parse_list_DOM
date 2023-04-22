'use strict';

const worker = document.querySelector('ul');
const personList = [...worker.children];

function sortSalary(list) {
  const sortedEmployees = list.sort((a, b) => {
    return (convertToNum(b.dataset.salary)
      - convertToNum(a.dataset.salary));
  });

  for (const employee of sortedEmployees) {
    worker.insertAdjacentElement('beforeend', employee);
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

function convertToNum(str) {
  const corectNumb = str.slice(1).split(',').join('');

  return corectNumb;
};

sortSalary(personList);
getEmployees(personList);
