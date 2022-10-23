'use strict';

const employeesList = [...document.querySelectorAll('li')];

function sortList(list) {
  list.sort((a, b) => {
    function formatSalary() {
      this.dataset.salary = +this.dataset.salary.split('').filter(
        el => el !== '$' && el !== ',').join('');
    }
    a.dataset.salary = formatSalary(a);

    a.dataset.salary = formatSalary(b);

    return b.dataset.salary - a.dataset.salary;
  });
}

function getEmployees(list) {
  const employeesContainer = document.querySelector('ul');

  employeesContainer.append(...employeesList);

  return employeesContainer;
}

sortList(employeesList);
getEmployees(employeesList);
