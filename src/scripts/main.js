'use strict';

const employeesElements = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

const convertSalary = (salary) => {
  return +salary.slice(1).split(',').join('');
};

function sortList(list) {
  const copyList = [...list];
  const sortedList = copyList.sort((first, second) => (
    convertSalary(second.dataset.salary) - convertSalary(first.dataset.salary))
  );

  employeesList.append(...sortedList);
}

function getEmployees(list) {
  return list.map(elem => ({
    fullname: elem.innerText,
    position: elem.dataset.position,
    salary: elem.dataset.salary,
    age: +elem.dataset.age,
  }));
};

sortList(employeesElements);
getEmployees(employeesElements);
