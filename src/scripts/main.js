'use strict';

const employeesCollection = document.querySelectorAll('li');
const employeesList = document.querySelector('ul');

function getEmployees(list) {
  return [...list].map(person => {
    return {
      name: person.textContent,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };
  });
}

function sortList(list) {
  const sortedList = [...list].sort((curr, next) => {
    const currSalary = Number(curr.dataset.salary.slice(1).replace(/,/g, ''));
    const nextSalary = Number(next.dataset.salary.slice(1).replace(/,/g, ''));

    return nextSalary - currSalary;
  });

  employeesList.append(...sortedList);
}

sortList(employeesCollection);
getEmployees(employeesCollection);
