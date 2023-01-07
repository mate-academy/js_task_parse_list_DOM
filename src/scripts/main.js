'use strict';

const listEmployees = document.querySelector('ul');

const convertToNumber = ({ dataset }) => {
  return parseFloat(dataset.salary.replace(/\W/g, ''));
};

const sortList = (list) => {
  const sortedList = [...list.children].sort((employeeA, employeeB) => {
    const salaryA = convertToNumber(employeeA);
    const salaryB = convertToNumber(employeeB);

    return salaryB - salaryA;
  });

  listEmployees.append(...sortedList);
};

const getEmployees = (list) => {
  return [...list.children].map(employee => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: +employee.dataset.age,
    };
  });
};

sortList(listEmployees);
getEmployees(listEmployees);
