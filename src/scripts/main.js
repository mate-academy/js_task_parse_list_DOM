'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const getSalaryFromString = (salaryString) => {
    return parseFloat(salaryString.replace(/[^0-9.-]+/g, ''));
  };

  const sortList = (list) => {
    const listItems = Array.from(list.children);

    listItems.sort((a, b) => {
      const salaryA = getSalaryFromString(a.dataset.salary);
      const salaryB = getSalaryFromString(b.dataset.salary);

      return salaryB - salaryA;
    });

    listItems.forEach((item) => list.appendChild(item));
  };

  const getEmployees = (list) => {
    const listItems = Array.from(list.children);

    return listItems.map((item) => ({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: getSalaryFromString(item.dataset.salary),
      age: parseInt(item.dataset.age, 10),
    }));
  };

  const employeeList = document.querySelector('ul');

  sortList(employeeList);

  const employees = getEmployees(employeeList);

  // eslint-disable-next-line no-console
  console.log(employees);
});
