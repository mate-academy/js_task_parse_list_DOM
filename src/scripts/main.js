'use strict';

const employeesElArray = [...document.querySelectorAll('li')];
const listEl = document.querySelector('ul');

const sortList = (list) => {
  const sorted = list.sort((a, b) => {
    const aSalary = getFormaredSalary(a.dataset.salary);
    const bSalary = getFormaredSalary(b.dataset.salary);

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

const getFormaredSalary = (salary) => {
  return +salary.replace(/[^0-9]/g, '');
};

sortList(employeesElArray);
getEmployees(employeesElArray);
