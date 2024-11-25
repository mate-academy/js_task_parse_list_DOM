'use strict';

function convertToNumber(salary) {
  return parseFloat(salary.replace(/[^\d.-]/g, ''));
}

function sortList(list) {
  list.sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });
}

function getEmployees(list) {
  return list.map((item) => {
    return {
      name: item.dataset.name,
      position: item.dataset.position,
      salary: convertToNumber(item.dataset.salary),
      age: item.dataset.age,
    };
  });
}

const employeeList = document.querySelectorAll('.employee');

sortList(Array.from(employeeList));

getEmployees(employeeList);
