'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const employeesList = document.querySelector('ul');

  sortList(employeesList);

  getEmployees(employeesList);

  function sortList(list) {
    const employees = list.querySelectorAll('li');

    const sortedEmployees = [...employees].sort((p1, p2) => {
      const p1Salary = convertStringToNumber(p1.dataset.salary);
      const p2Salary = convertStringToNumber(p2.dataset.salary);

      return p2Salary - p1Salary;
    });

    list.innerHTML = `
      ${sortedEmployees.map(employee =>
    ` <li
        data-position=${employee.dataset.position}
        data-salary=${employee.dataset.salary}
        data-age=${employee.dataset.age}
      >
        ${employee.textContent}
      </li>
    `
  ).join('')}
    `;
  };

  function getEmployees(list) {
    const employees = list.querySelectorAll('li');

    const employeesData = [...employees].reduce((dataAll, employee) => {
      const nameEmployee = (employee.textContent).trim();
      const { position, salary, age } = employee.dataset;

      dataAll.push(
        {
          nameEmployee, position, salary, age,
        }
      );

      return dataAll;
    }, []);

    return employeesData;
  }

  function convertStringToNumber(value) {
    const valueNumberType = +value.replace(/\D/g, '');

    return valueNumberType;
  }
});
