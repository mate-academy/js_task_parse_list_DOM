'use strict';

// write code here
const amployeeElements = document.querySelectorAll('ul > li');
const employeeArray = Array.from(amployeeElements);

const parseSalary = (salaryString) => {
  return parseFloat(salaryString.replaceAll('$', '').replaceAll(',', ''));
}

const sortList = () => {
  employeeArray.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));
    return salaryB - salaryA;
  })
}

const getEmployees = () => {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';

  employeeArray.forEach(employee => {
    ul.appendChild(employee);
  })
}

sortList();
getEmployees();

