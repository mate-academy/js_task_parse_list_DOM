'use strict';

const list = document.querySelector('ul');
const employees = document.querySelectorAll('li');

const normalize = (str) => +str.slice(1).split(',').join('');

const sortList = function(newlist) {
  const salary = [...newlist].sort((a, b) => normalize(b.dataset.salary)
  - normalize(a.dataset.salary));

  list.append(...salary);
};

const getEmployees = function(arr) {
  return [...arr].map(el => {
    return {
      name: el.innerText,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });
};

sortList(employees);
getEmployees(employees);
