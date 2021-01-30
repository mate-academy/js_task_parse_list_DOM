'use strict';

const employeesNode = document.querySelector('ul');
const employees = [...employeesNode.querySelectorAll('li')];

const sortList = (toBeSorted) => {
  toBeSorted.sort((one, two) => {
    const first = +one.dataset.salary.replace(/[,$]/g, '');
    const second = +two.dataset.salary.replace(/[,$]/g, '');

    return second - first;
  });
  employeesNode.append(...employees);
};

const getEmployees = (toBePresented) => {
  const employeesInfo = [];

  for (const person of toBePresented) {
    const employee = {
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    };

    employeesInfo.push(employee);
  }

  return employeesInfo;
};

sortList(employees);
getEmployees(employees);
