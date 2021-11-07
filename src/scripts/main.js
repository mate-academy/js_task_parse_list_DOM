'use strict';

const list = document
  .querySelector('ul');

const salaryToNumber = salary => Number(
  salary
    .slice(1)
    .split(',')
    .join(''));

const sortList = arr => [...arr.children]
  .sort((a, b) =>
    salaryToNumber(b.dataset.salary) - salaryToNumber(a.dataset.salary))
  .map(employe =>
    list.append(employe));

const getEmployees = arr => [...arr.children]
  .map(employe =>
    ({
      name: employe.innerText,
      position: employe.dataset.position,
      salary: salaryToNumber(employe.dataset.salary),
      age: Number(employe.dataset.age),
    }));

sortList(list);
getEmployees(list);
