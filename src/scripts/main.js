'use strict';

const employees = [...document.querySelectorAll('li')];
const employeesList = document.querySelector('ul');

const sortList = (list) => {
  return list.sort((a, b) => {
    const x = a.dataset.salary.replace('$', '').replace(',', '');
    const y = b.dataset.salary.replace('$', '').replace(',', '');

    return y - x;
  });
};

sortList(employees);

employeesList.innerHTML = '';

employees.forEach(employee => {
  employeesList.appendChild(employee);
});

const getEmployees = (list) => {
  const res = [];

  list.forEach(employee => {
    const obj = {};

    obj.name = employee.innerText;
    obj.position = employee.dataset.position;
    obj.salary = employee.dataset.salary;
    obj.age = employee.dataset.age;
    res.push(obj);
  });

  return res;
};

getEmployees(employees);
