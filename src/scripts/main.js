'use strict';

const newList = document.querySelector('ul');
const arrList = Array.from(newList.children);

function salaryToNumber(peopleSalary) {
  return Number(peopleSalary.dataset.salary.slice(1).split(',').join(''));
}

function sortList(list) {
  const sortEmpl = list.sort((a, b) => salaryToNumber(b) - salaryToNumber(a));

  const newProtoList = document.createElement('ul');

  newProtoList.append(...sortEmpl);

  newList.replaceWith(newProtoList);
}

function getEmployees(list) {
  return list.map(people => {
    const peoplObj = {
      name: people.innerText,
      position: people.dataset.position,
      salary: people.dataset.salary,
      age: people.dataset.age,
    };

    return peoplObj;
  });
}

sortList(arrList);
getEmployees(arrList);
