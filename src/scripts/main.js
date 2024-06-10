'use strict';

const extractNumber = (n) => parseFloat(n.replace(/[^0-9.]/g, ''));

const sortList = (list) =>
  list.sort(
    (a, b) => extractNumber(b.dataset.salary) - extractNumber(a.dataset.salary),
  );

const getEmployees = (employees) =>
  [...employees].map((employer) => {
    const { position, salary, age } = employer.dataset;

    return {
      name: employer.innerHTML.trim(),
      position,
      salary,
      age,
    };
  });

const ul = document.getElementsByTagName('ul')[0];
const employeesList = [...ul.getElementsByTagName('li')];

sortList(employeesList);
getEmployees(employeesList);

ul.innerHTML = '';

employeesList.forEach((li) => ul.appendChild(li));
