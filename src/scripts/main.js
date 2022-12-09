'use strict';

const employees = document.querySelectorAll('li');
const employeesList = document.querySelector('ul');

function converting(text) {
  return Number(text.replace(/\D/g, ''));
}

function sortList(list) {
  const copy = [...list];
  const sortElement = copy.sort((a, b) =>
    converting(b.dataset.salary) - converting(a.dataset.salary)
  );

  employeesList.append(...sortElement);
};

function getEmployeesList(list) {
  return [...list].map(element => ({
    name: element.innerText,
    position: element.dataset.position,
    salary: element.dataset.salary,
    age: element.dataset.age,
  }));
};

sortList(employees);
getEmployeesList(employees);
