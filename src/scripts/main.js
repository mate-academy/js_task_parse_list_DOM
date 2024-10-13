'use strict';

const employees = [...document.querySelectorAll('li')];

const dataAtributToNumber = (salary) => {
  return salary.replace(/\D/g, '');
};

const sortList = (list) => {
  list
    .sort(
      (value1, value2) =>
        dataAtributToNumber(value2.dataset.salary) -
        dataAtributToNumber(value1.dataset.salary),
    )
    .forEach((employee, i) => list[i].parentElement.appendChild(employee));
};

const getEmployees = (list) => {
  list.forEach((employee) => {
    return {
      name: employee.innerText,
      position: employee.dataset.position,
      salary: dataAtributToNumber(employee.dataset.salary),
      age: +employee.dataset.age,
    };
  });
};

sortList(employees);
getEmployees(employees);
