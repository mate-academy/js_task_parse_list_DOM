'use strict';

const employeesList = document.querySelector('ul');
const employeesItem = document.querySelectorAll('li');

function convertSalary(salary) {
  return salary.replace(/\D/g, '');
}

function sortList(list) {
  const sortedList = [...list].sort((firstElement, secondElement) =>
    convertSalary(secondElement.dataset.salary)
      - convertSalary(firstElement.dataset.salary));

  employeesList.append(...sortedList);
}

function getEmployees(list) {
  return [...list].map(personInfo => ({
    name: personInfo.textContent,
    position: personInfo.dataset.position,
    salary: personInfo.dataset.salary,
    age: personInfo.dataset.age,
  }));
}

sortList(employeesItem);
getEmployees(employeesItem);
