'use strict';

// write code here
const listOfEmployees = [...document.querySelectorAll('li')];

function sortList(list) {
  const ul = document.querySelector('ul');

  list.sort((el1, el2) => {
    return (
      +el2.dataset.salary.slice(1).replace(',', '') -
      +el1.dataset.salary.slice(1).replace(',', '')
    );
  });

  list.forEach((li) => ul.append(li));
}

function getEmployees(list) {
  return list.map((employee) => {
    const { position, salary, age } = employee.dataset;

    return {
      name: employee.textContent.trim(),
      position,
      salary,
      age,
    };
  });
}

sortList(listOfEmployees);
getEmployees(listOfEmployees);
