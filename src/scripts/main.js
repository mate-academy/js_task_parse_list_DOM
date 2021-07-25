'use strict';

const empList = [...document.getElementsByTagName('ul')];
const employeeData = [...document.getElementsByTagName('li')];

function sortList(list) {
  return list.sort(function(prev, current) {
    return +current.dataset.salary.replace('$', '').replace(',', '')
    - +prev.dataset.salary.replace('$', '').replace(',', '');
  });
};

function getEmployees(list) {
  list.innerHTML = '';

  return employeeData.forEach(employee => list.append(employee));
};

sortList(employeeData);
getEmployees(empList);
// write code here
