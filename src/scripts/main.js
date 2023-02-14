'use strict';

const list = document.querySelectorAll('li');

const sortList = function(items) {
  return [...items].sort((a, b) => {
    const salaryA = Number(a.dataset.salary.split(',').join('').slice(1));
    const salaryB = Number(b.dataset.salary.split(',').join('').slice(1));

    return (salaryB - salaryA);
  });
};

document.querySelector('ul').append(...sortList(list));

const getEmployees = function(items) {
  return [...items].map(person => (
    {
      name: person.innerText,
      position: person.dataset.position,
      sallary: person.dataset.salary,
      age: person.dataset.age,
    }));
};

getEmployees(list);
