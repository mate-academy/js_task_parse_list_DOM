'use strict';

const employees = document.querySelector('ul');

const stringToNumberConvertor = string => (
  Number(string.slice(1).split(',').join(''))
);

const sortList = list => {
  const itemsOfList = [...list.children];

  itemsOfList.sort((current, next) => (
    stringToNumberConvertor(next.dataset.salary)
    - stringToNumberConvertor(current.dataset.salary)
  ));

  employees.append(...itemsOfList);
};

const getEmployees = list => {
  return [...list.children].map(listChild => {
    const employee = {};

    employee.name = listChild.innerText;
    employee.position = listChild.dataset.position;
    employee.salary = listChild.dataset.salary;
    employee.age = listChild.dataset.age;

    return employee;
  });
};

sortList(employees);
getEmployees(employees);
