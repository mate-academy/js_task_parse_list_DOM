'use strict';

const employees = document.querySelector('ul');

const sortList = (list) => {
  const employee = list.children;

  const stringToNumber = (string) => {
    return Number(string.match(/\d/g).join(''));
  };

  const sortedEmployees = [...employee].sort((employee1, employee2) => (
    stringToNumber(employee2.dataset.salary)
    - stringToNumber(employee1.dataset.salary)
  ));

  list.append(...sortedEmployees);

  return sortedEmployees;
};

const getEmployees = (list) => {
  const employee = list.children;
  const fullInformation = [];

  for (let i = 0; i < employee.length; i++) {
    fullInformation.push({
      name: employee[i].innerText,
      position: employee[i].dataset.position,
      salary: employee[i].dataset.salary,
      age: employee[i].dataset.age,
    });
  }

  return fullInformation;
};

sortList(employees);
getEmployees(employees);
