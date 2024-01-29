/* eslint-disable max-len */
'use strict';

addEventListener('DOMContentLoaded', () => {
  const sortEmployeesInit = () => {
    const listBlock = document.querySelector('ul');

    if (listBlock) {
      const items = listBlock.querySelectorAll('li');

      const getSalary = (salary) => +salary.replace('$', '').replace(',', '');

      const getEmployees = (employees) => {
        const arr = [];

        employees.forEach((employee) => {
          const employeePosition = employee.dataset.position;
          const employeeSalary = employee.dataset.salary;
          const employeeAge = employee.dataset.age;
          const employeeName = employee.textContent.trim();

          arr.push({
            position: employeePosition,
            salary: employeeSalary,
            age: employeeAge,
            fullName: employeeName,
          });
        });

        return arr;
      };

      const sortList = (list) => {
        const employees = getEmployees(list);
        const sortedEmployees = employees.sort((a, b) => {
          const aSalary = getSalary(a.salary);
          const bSalary = getSalary(b.salary);

          return bSalary - aSalary;
        });

        listBlock.innerHTML = '';

        sortedEmployees.forEach(({ position, salary, age, fullName }) => {
          const li = `<li data-position="${position}" data-age="${salary}" data-age="${age}">${fullName}</li>`;

          listBlock.innerHTML += li;
        });
      };

      sortList(items);
    }
  };

  sortEmployeesInit();
});
