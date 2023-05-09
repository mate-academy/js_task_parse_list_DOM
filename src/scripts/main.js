'use strict';

const employeesElArray = [...document.querySelectorAll('li')];
const listEl = document.querySelector('ul');

const sortList = (list) => {
  const sorted = list.sort((a, b) => {
    const aSalary = +a.dataset.salary.replace(/[^0-9]/g, '');
    const bSalary = +b.dataset.salary.replace(/[^0-9]/g, '');

    return bSalary - aSalary;
  });

  listEl.append(...sorted);
};

const getEmployees = (list) => {
  return list.map(person => ({
    name: person.innerText,
    position: person.dataset.positon,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
};

sortList(employeesElArray);
getEmployees(employeesElArray);
