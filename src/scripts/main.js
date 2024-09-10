'use strict';

const parseSalary = (salaryStr) => {
  return +salaryStr.replace(/[$,]/g, '');
};

const sortList = (employeeList) => {
  const listItems = [...employeeList.children];

  listItems.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  listItems.forEach((item) => employeeList.appendChild(item));
};

const getEmployees = (employeeList) => {
  const listItems = [...employeeList.children];

  const employees = listItems.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: parseSalary(item.getAttribute('data-salary')),
      age: +item.getAttribute('data-age'),
    };
  });

  return employees;
};

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
