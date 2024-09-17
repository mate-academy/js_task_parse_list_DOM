'use strict';

const ul = document.querySelector('ul');
const liArr = ul.querySelectorAll('li');

sortList(liArr);
getEmployees(liArr);

function sortList([...list]) {
  list.sort((a, b) => {
    const salaryA = +a.dataset.salary.slice(1).split(',').join('');
    const salaryB = +b.dataset.salary.slice(1).split(',').join('');

    return salaryB - salaryA;
  });

  list.forEach(person => {
    ul.insertAdjacentElement('beforeend', person);
  });
}

function getEmployees([...list]) {
  const employees = [];

  list.forEach(person => {
    employees.push({
      name: person.textContent,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  });

  return employees;
}
