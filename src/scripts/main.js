'use strict';

const employees = document.querySelector('ul');
const employeesArr = [...employees.children];

function sortList(list) {
  function getNumberType(item) {
    const numberValue = parseInt(item.dataset.salary
      .slice(1).split(',').join(''));

    return numberValue;
  };

  list.sort((a, b) => getNumberType(b) - getNumberType(a));

  list.forEach(element => employees.append(element));
};

function getEmployees(list) {
  const newEmployees = [];

  for (const item of list) {
    const employe = {};

    employe.name = item.innerText;
    employe.position = item.dataset.position;
    employe.salary = item.dataset.salary;
    employe.age = item.dataset.age;

    newEmployees.push(employe);
  }

  return newEmployees;
}

sortList(employeesArr);
getEmployees(employeesArr);
