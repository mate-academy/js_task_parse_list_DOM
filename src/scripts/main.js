'use strict';


const salaries = [...document.querySelectorAll('[data-salary')];

function sortList(list) {
  list.sort((a, b) =>
    +b.dataset.salary.slice(1).split(',').join('')
    - +a.dataset.salary.slice(1).split(',').join(''));

  list.map(li => li.parentElement.append(li));
};

const getEmployees = (list) => {
  return list.map(item => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
};

sortList(salaries);
getEmployees(salaries);
