'use strict';
function toNumber(number) {
  return +number.slice(1).split(',').join("");
}

function sortList(list) {
  const sortedList = list
    .sort((a, b) => toNumber(b.dataset.salary) - toNumber(a.dataset.salary));

  sortedList.forEach(employee => {
    document.querySelector('ul').append(employee);
  });
}

function getEmployees(list) {
  return list.map(employee => ({
    name: employee.innerText,
    position: employee.dataset.position,
    age: employee.dataset.age,
    salary: toNumber(employee.dataset.salary),
  }));
}

const employees = [...document.querySelectorAll('li')];


sortList(employees);
getEmployees(employees);
