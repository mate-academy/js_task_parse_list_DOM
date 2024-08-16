'use strict';

const employeesList = document.querySelector('ul');

function convertToNumber(str) {
  return +str.replace('$', '').replaceAll(',', '');
}

function sortList(list) {
  const elements = [...list.children];

  elements.sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  return elements;
}

const sortedEmployees = sortList(employeesList);

employeesList.innerHTML = '';

sortedEmployees.forEach((employee) => employeesList.append(employee));

function getEmployees(list) {
  const elements = [...list.children];
  const result = [];

  elements.forEach((el) => {
    result.push({
      name: el.innerText,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    });
  });

  return result;
}

getEmployees(employeesList);
