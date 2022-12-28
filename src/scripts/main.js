'use strict';

const employeesList = document.querySelectorAll('li');

const toNumber = function(string) {
  return +string.slice(1).split(',').join('');
};

const sortList = (list) => {
  return [...list].sort((a, b) =>
    toNumber(b.dataset.salary) - toNumber(a.dataset.salary));
};

document.querySelector('ul').append(...sortList(employeesList));

const getEmployees = (list) => {
  const allList = [...list];

  return allList.map(people => (
    {
      name: people.innerText,
      position: people.dataset.position,
      salary: people.dataset.salary,
      age: people.dataset.age,
    }));
};

getEmployees(employeesList);
