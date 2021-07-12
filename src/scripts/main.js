'use strict';

// write code here
const employeesList = [...document.querySelectorAll('li')];
const pageList = document.querySelector('ul');

function convertNumber(str) {
  return str.replace('$', '').replace(',', '');
};

function getEmployees(list) {
  return list.map(employee => {
    return {
      name: employee.textContent.trim(),
      ...employee.dataset,
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
