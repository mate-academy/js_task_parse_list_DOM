'use strict';

const listTotal = document.querySelector('ul');
const listOfEmployees = document.querySelectorAll('ul > li');

function sortList(list) {
  return ([...list].sort((a, b) => formatSalary(
    b.dataset.salary) - formatSalary(a.dataset.salary)));
}

const sortedList = sortList(listOfEmployees);

listTotal.append(...sortedList);

function getEmployees(list) {
  const arrOfEmployees = [];

  list.forEach(item => {
    const objOfEmployee = {};

    objOfEmployee['name'] = item.innerText;
    objOfEmployee['position'] = item.dataset.position;
    objOfEmployee['salary'] = item.dataset.salary;
    objOfEmployee['age'] = item.dataset.age;
    arrOfEmployees.push(objOfEmployee);
  });

  return arrOfEmployees;
};

getEmployees(sortedList);

function formatSalary(salary) {
  return +salary.replace('$', '').replace(',', '');
}
