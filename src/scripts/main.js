'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const employeesElements = Array.from(document.querySelectorAll('li'));
  const ulElement = document.querySelector('ul');

  const convertToNumber = (data) => {
    return parseFloat(data.slice(1).replace(',', ''));
  };

  const sortList = (list) => {
    const sortedEmployees = list.sort((employee1, employee2) => {
      return (
        convertToNumber(employee2.dataset.salary) -
        convertToNumber(employee1.dataset.salary)
      );
    });

    sortedEmployees.forEach((element) => ulElement.appendChild(element));
  };

  const getEmployees = (list) => {
    return list.map((employee) => ({
      name: employee.textContent.trim(),
      position: employee.dataset.position || 'Unknown',
      salary: employee.dataset.salary || '$0',
      age: +employee.dataset.age || 0,
    }));
  };

  getEmployees(employeesElements);

  sortList(employeesElements);
});
