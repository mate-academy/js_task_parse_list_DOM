'use strict';

const list = document.querySelector('ul');

function salaryToNumber(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

const employees = Array.from(list.querySelectorAll('li'));

employees.sort(function (a, b) {
  const firstSalary = salaryToNumber(a.dataset.salary);
  const SecondSalary = salaryToNumber(b.dataset.salary);

  return SecondSalary - firstSalary;
});

list.innerHTML = '';

employees.forEach(function (employee) {
  list.appendChild(employee);
});
