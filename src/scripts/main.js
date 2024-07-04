'use strict';

const employeeEl = document.querySelectorAll('ul > li');
const employeeArr = Array.from(employeeEl);

const salary = (salaryString) => {
  return parseFloat(salaryString.replace('$', '').replace(',', ''));
};

const sortList = () => {
  employeeArr.sort((a, b) => {
    const salaryA = salary(a.getAttribute('data-salary'));
    const salaryB = salary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });
};

const getEmployees = () => {
  const ul = document.querySelector('ul');

  ul.innerHTML = '';

  employeeArr.forEach((employee) => {
    ul.appendChild(employee);
  });
};

sortList();
getEmployees();
