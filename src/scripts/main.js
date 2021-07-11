'use strict';

// write code here
const employeesList = [...document.querySelectorAll('li')];
const pageList = document.querySelector('ul');

function convertNumber(str) {
  return str.replace('$', '').replace(',', '');
};

function getEmployees(list) {
  return list.map((employee, i) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

function sortList(list) {
  const sortedList = list.sort((prev, current) => {
    return convertNumber(current.dataset.salary)
    - convertNumber(prev.dataset.salary);
  });

  for (const employee of sortedList) {
    pageList.append(employee);
  }
}

sortList(employeesList);
getEmployees(employeesList);
