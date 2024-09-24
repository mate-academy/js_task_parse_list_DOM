'use strict';

const toNumber = (str) => {
  return +str.replace(/\D/g, '');
};

const sortList = (list) => {
  const employees = [...list.children];

  employees.sort((emplA, emplB) => {
    const emplASalary = toNumber(emplA.dataset.salary);
    const emplBSalary = toNumber(emplB.dataset.salary);

    return emplBSalary - emplASalary;
  });

  return employees;
};

const getEmployees = (list) => {
  const employees = [...list.children];
  const result = [];

  employees.forEach((empl) => {
    result.push({
      name: empl.innerText,
      position: empl.dataset.position,
      salary: empl.dataset.salary,
      age: empl.dataset.age,
    });
  });
};

const listOfEmployees = document.querySelector('ul');
const sortedBySalary = sortList(listOfEmployees);

listOfEmployees.innerHTML = '';
sortedBySalary.forEach((employee) => listOfEmployees.append(employee));
getEmployees(listOfEmployees);
