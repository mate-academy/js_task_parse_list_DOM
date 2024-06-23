'use strict';

const listItems = document.querySelectorAll('li');

const getSalary = (item) => {
  const salaryString = item.getAttribute('data-salary').replace(/[$,]/g, '');

  return parseFloat(salaryString);
};

const sortList = (list) => {
  const sorted = Array.from(list).sort((a, b) => getSalary(b) - getSalary(a));

  const employeeList = document.getElementById('employeeList');

  employeeList.innerHTML = '';
  sorted.forEach((item) => employeeList.appendChild(item));

  return sorted;
};

const getEmployees = (list) => {
  return Array.from(list).map((item) => ({
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: getSalary(item),
    age: parseInt(item.getAttribute('data-age'), 10),
  }));
};

sortList(listItems);

getEmployees();

// console.log(employees);
