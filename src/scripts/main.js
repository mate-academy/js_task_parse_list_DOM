'use strict';

const listOfEmployees = document.querySelector('ul');
const employees = document.querySelectorAll('li');
const arrayOfEmployees = [...employees];

const normalizeSalary = (salary) => {
  return Number(salary.slice(1).replace(/,/g, ''));
};

while (listOfEmployees.firstChild) {
  listOfEmployees.removeChild(listOfEmployees.firstChild);
}

const sortList = () => {
  return arrayOfEmployees
    .sort(
      (a, b) =>
        normalizeSalary(b.dataset.salary) - normalizeSalary(a.dataset.salary),
    )
    .forEach((item) => listOfEmployees.appendChild(item));
};

const getEmployees = () => {
  return arrayOfEmployees.map((employee) => ({
    name: employee.innerText,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
};

sortList();
getEmployees();
