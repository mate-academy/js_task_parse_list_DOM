'use strict';

const sortList = (listElement) => {
  const list = [...listElement.children];

  const getSalary = (salaryStr) => salaryStr.slice(1).split(',').join('');

  list.sort((a, b) => {
    return getSalary(b.dataset.salary) - getSalary(a.dataset.salary);
  });

  listElement.innerHTML = '';
  list.forEach(el => listElement.appendChild(el));
};

const getEmployees = (listElement) => {
  const list = [...listElement.children];

  return list.map(li => {
    const employee = {};

    employee.name = li.textContent.trim();
    employee.position = li.dataset.position;
    employee.salary = li.dataset.salary;
    employee.age = li.dataset.age;

    return employee;
  });
};

sortList(document.querySelector('ul'));
getEmployees(document.querySelector('ul'));
