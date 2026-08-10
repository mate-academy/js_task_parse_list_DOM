'use strict';

const employeeList = document.querySelector('ul');

function parseSalary(salaryString) {
  const cleanString = salaryString.replaceAll('$', '').replaceAll(',', '');

  return Number(cleanString);
}

function sortList(list) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort((itemA, itemB) => {
    const salaryA = parseSalary(itemA.dataset.salary);
    const salaryB = parseSalary(itemB.dataset.salary);

    return salaryB - salaryA;
  });

  itemsArray.forEach((item) => {
    list.appendChild(item);
  });
}

function getEmployees(list) {
  const itemsArray = Array.from(list.children);

  return itemsArray.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

sortList(employeeList);
getEmployees(employeeList);

// const employeesData = getEmployees(employeeList);

// console.log(employeesData);
