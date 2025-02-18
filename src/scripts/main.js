'use strict';

window.onload = function () {
  const salaryData = document.querySelectorAll('li');

  const sortList = (list) =>
    Array.from(list).sort((a, b) => {
      const aSalary = a.dataset.salary;
      const bSalary = b.dataset.salary;

      const aSalaryText = aSalary.replace('$', '').replace(',', '');
      const bSalaryText = bSalary.replace('$', '').replace(',', '');

      const aSalaryToNumber = parseInt(aSalaryText);
      const bSalaryToNumber = parseInt(bSalaryText);

      return bSalaryToNumber - aSalaryToNumber;
    });

  const sortedSalaryList = sortList(salaryData);

  const container = document.querySelector('ul');

  container.textContent = '';

  container.append(...sortedSalaryList);

  const getEmployees = (list) => {
    return Array.from(list).map((employee) => ({
      name: employee.textContent,
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    }));
  };

  getEmployees(salaryData);
};
