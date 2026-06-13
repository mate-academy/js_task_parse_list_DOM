'use strict';

const listElements = document.querySelector('ul');

function parseSalary(salaryString) {
  return Number(salaryString.slice(1).split(',').join(''));
}

function sortList(listElement) {
  const employeesArray = [...listElement.children];

  employeesArray.sort((a, b) => {
    const cleanSalaryA = parseSalary(a.dataset.salary);
    const cleanSalaryB = parseSalary(b.dataset.salary);

    return cleanSalaryB - cleanSalaryA;
  });

  listElement.append(...employeesArray);
}

function getEmployees(list) {
  const itemsArray = [...list.children];
  const employeesArray = itemsArray.map((item) => {
    return {
      name: item.firstChild.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: item.dataset.age,
    };
  });

  return employeesArray;
}

sortList(listElements);

getEmployees(listElements);
