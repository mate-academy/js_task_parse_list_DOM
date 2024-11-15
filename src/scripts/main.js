'use strict';

const employees = document.querySelectorAll('li');
const len = employees.length;

const massSalary = [];
const massObjPeople = [];

for (let i = 0; i < len; i++) {
  let int = employees[i].getAttribute('data-salary').replace('$', '');

  int = +int.replace(',', '');

  massSalary.push(int);
}

for (let i = 0; i < len; i++) {
  const objPeople = {};

  let int = employees[i].getAttribute('data-salary').replace('$', '');

  int = +int.replace(',', '');

  objPeople.name = employees[i].textContent;
  objPeople.position = employees[i].getAttribute('data-position');
  objPeople.salary = int;
  objPeople.age = employees[i].getAttribute('data-age');

  massObjPeople.push(objPeople);
}

massSalary.sort((a, b) => b - a);

function getEmployees(list) {
  return massObjPeople;
}

getEmployees();

function sortList(list) {
  const sortedSalary = massObjPeople.sort((sal1, sal2) => {
    return sal2.salary - sal1.salary;
  });

  for (let n = 0; n < len; n++) {
    employees[n].textContent = sortedSalary[n].name;
  }
}

sortList();
