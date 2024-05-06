'use strict';

const listOfEmployees = document.querySelectorAll('li');

const getSalary = (employee) => {
  return parseInt(employee.dataset.salary.replace(/[$,]/g, ''), 10);
};

const sortList = (list) => {
  const newList = [...list];

  return newList.sort((employee1, employee2) => {
    return getSalary(employee2) - getSalary(employee1);
  });
};

const getEmployees = (list) => {
  const newList = [...list];

  return newList.map((employee) => {
    return {
      name: employee.outerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
};

sortList(listOfEmployees);
getEmployees(listOfEmployees);

document.querySelector('ul').prepend(...sortList(listOfEmployees));
