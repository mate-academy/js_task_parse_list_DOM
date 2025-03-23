'use strict';

const body = document.querySelector('body');
const ul = body.querySelector('ul');

const salarySort = function (list) {
  const sortedBySalaries = [...list.children];

  sortedBySalaries.sort((a, b) => {
    return (
      Number(b.dataset.salary.slice(1).replaceAll(',', '')) -
      Number(a.dataset.salary.slice(1).replaceAll(',', ''))
    );
  });

  for (let i = 0; i < sortedBySalaries.length; i++) {
    list.append(sortedBySalaries[i]);
  }
};

salarySort(ul);

const getEmployees = function (list) {
  const employees = [...list.children];
  const result = employees.map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: employee.dataset.age,
  }));

  return result;
};

const employeesObjects = (document.createElement('p').textContent =
  `${JSON.stringify(getEmployees(ul))}`);

body.append(employeesObjects);
