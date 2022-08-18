'use strict';

const listEmployees = document.querySelector('ul');
const employees = listEmployees.querySelectorAll('li');

const sortList = function(list) {
  const sortedEmployes = [...employees]
    .sort((a, b) => +b.dataset.salary
      .replace(',', '').slice(1) - +a.dataset.salary.replace(',', '').slice(1));

  sortedEmployes.forEach(employee => {
    list.append(employee);
  });
};

const getEmployees = function(list) {
  const workers = [];

  [...employees].forEach(employee => {
    workers.push({
      name: employee.innerText,
      position: employee.dataset.position,
      salary: +employee.dataset.salary,
      age: employee.dataset.age,
    });
  });

  return workers;
};

sortList(listEmployees);
getEmployees(listEmployees);
