'use strict';

const employeesList = [...document.querySelectorAll('li')];
const employeesListContainer = document.querySelector('ul');

const numberFormat = (el) => Number(el.substring(1).replaceAll(',', ''));

const sortList = (list) => {
  list.sort(
    (a, b) => numberFormat(b.dataset.salary) - numberFormat(a.dataset.salary),
  );

  return list;
};

const getEmployeesObjects = function (list) {
  const employees = [];

  for (const el of list) {
    const employee = {
      name: el.textContent.replaceAll('\n', '').trim(),
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };

    employees.push(employee);
  }

  return employees;
};

const sortedList = sortList(employeesList);

getEmployeesObjects(sortedList);

employeesListContainer.append(...sortedList);
