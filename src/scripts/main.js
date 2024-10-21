'use strict';

const transformToNumber = (str) => {
  return parseFloat(str.replace(/[$,]/g, ''));
};
const getEmployees = (list) => {
  const result = list.map((employee) => {
    return {
      name: employee.textContent.trim(),
      salary: transformToNumber(employee.getAttribute('data-salary')),
    };
  });

  return SortList(result);
};
const SortList = (list) => {
  return list.sort((a, b) => b.salary - a.salary);
};

const employeesArray = Array.from(document.querySelectorAll('ul li'));

getEmployees(employeesArray);
