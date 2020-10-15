'use strict';

const employList = document.querySelector('ul');
const employees = [...employList.children];

function sortBySalary(list) {
  list.sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));
  employList.append(...list);
}

function toNumber(string) {
  return Number(string.replace(/[^\d]/g, ''));
}

function getEmployees(list) {
  const peopleList = [];

  list.forEach(person => {
    peopleList.push({
      name: person.textContent.trim(),
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  });

  return peopleList;
};

sortBySalary(employees);
getEmployees(employees);
