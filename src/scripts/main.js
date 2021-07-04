'use strict';

const employees = [ ...document.querySelectorAll('li') ];
const list = document.querySelector('ul');

employees.sort((previousEmployee, currentEmployee) =>
  +currentEmployee.dataset.salary.replace(/[$,]/g, '')
  - +previousEmployee.dataset.salary.replace(/[$,]/g, ''));

list.innerHTML = '';

employees.forEach(employee => list.append(employee));
