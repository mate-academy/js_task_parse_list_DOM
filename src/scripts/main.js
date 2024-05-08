'use strict';

const ulEl = document.querySelector('ul');
const liEl = [...document.querySelectorAll('li')];

const sortList = (list) => {
  list.sort((a, b) => {
    const salaryA = +a.dataset.salary.replaceAll('$', '').replaceAll(',', '');
    const salaryB = +b.dataset.salary.replaceAll('$', '').replaceAll(',', '');

    return salaryB - salaryA;
  });

  list.forEach((li) => ulEl.append(li));
};

const getEmployees = (list) => {
  return list.map((e) => ({
    name: e.textContent,
    position: e.dataset.position,
    salary: e.dataset.salary,
    age: e.dataset.age,
  }));
};

sortList(liEl);
getEmployees(liEl);
