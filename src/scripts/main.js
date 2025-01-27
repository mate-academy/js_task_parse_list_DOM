'use strict';

const employeeList = [...document.querySelectorAll('li')];

const sortList = (list) => {
  list.sort((a, b) => {
    const salaryA = parseFloat(
      a.dataset.salary.replace('$', '').replace(',', ''),
    );
    const salaryB = parseFloat(
      b.dataset.salary.replace('$', '').replace(',', ''),
    );

    return salaryB - salaryA;
  });

  const employeeListContainer = document.querySelector('ul');

  employeeListContainer.innerHTML = '';

  list.forEach((item) => employeeListContainer.appendChild(item));
};

const getEmployees = (list) => {
  const employees = list.map((person) => ({
    name: person.dataset.name,
    position: person.dataset.position,
    salary: parseFloat(person.dataset.salary.replace('$', '').replace(',', '')),
  }));

  return employees;
};

sortList(employeeList);
getEmployees(employeeList);
