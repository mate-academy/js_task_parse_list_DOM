'use strict';

const employeesElements = [...document.querySelectorAll('li')];

const convertToNumber = (data) => {
  return +data.slice(1).split(',').join('.');
};

const sortList = (list) => {
  const ulElement = document.querySelector('ul');

  const sortedEmployees = list.sort(
    (employee1, employee2) =>
      convertToNumber(employee2.dataset.salary) -
      convertToNumber(employee1.dataset.salary),
  );

  sortedEmployees.forEach((element) => ulElement.append(element));
};

const getEmployees = (list) => {
  return list.map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: +employee.dataset.age,
  }));
};

getEmployees(employeesElements);
sortList(employeesElements);
