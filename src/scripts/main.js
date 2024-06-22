'use strict';

const listItems = document.querySelectorAll('#employeeList > li');

const getSalary = (item) => {
  const salaryString = item.getAttribute('data-salary').replace(/[$,]/g, '');

  return parseFloat(salaryString);
};

const sortList = (list) => {
  return Array.from(list).sort((a, b) => getSalary(b) - getSalary(a));
};

const sortedList = sortList(listItems);

const employeeList = document.getElementById('employeeList');

employeeList.innerHTML = '';
sortedList.forEach((item) => employeeList.appendChild(item));

// const employees = getEmployees(sortedList);
// console.log(employees);
