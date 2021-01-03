'use strict';

const employeesCollection = document.querySelectorAll('ul > li');
const employeesCollectionRepository = document.querySelector('ul');

function sortList(collection, list) {
  const sortedList = [...collection].sort((a, b) => {
    return Number(b.dataset.salary.replace(/\D/g, ''))
      - Number(a.dataset.salary.replace(/\D/g, ''));
  });

  list.append(...sortedList);
};

function getEmployee(collection) {
  return [...collection].map((employee) => ({
    name: employee.innerHTML,
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));
};

sortList(employeesCollection, employeesCollectionRepository);
getEmployee(employeesCollection);
