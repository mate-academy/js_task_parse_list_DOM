'use strict';

const employeeList = document.querySelector('ul');
const listItems = Array.from(employeeList.querySelectorAll('li'));
const sortedItems = listItems.sort((a, b) => {
  const salaryA = +a.dataset.salary.replace(/[$,]/g, '');
  const salaryB = +b.dataset.salary.replace(/[$,]/g, '');

  return salaryB - salaryA;
});

employeeList.innerHTML = '';

sortedItems.forEach((item) => {
  employeeList.appendChild(item);
});
