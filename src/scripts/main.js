'use strict';

function parseSalaryString(salaryString) {
  const cleanedString = salaryString.replace(/[\$\s,]/g, '');

  return Number(cleanedString);
}

function sortList(list) {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = parseSalaryString(a.dataset.salary);
    const salaryB = parseSalaryString(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItems.forEach((item) => {
    list.appendChild(item);
  });
}

function getEmployees(list) {
  const listItems = Array.from(list.children);

  const employeesArray = listItems.map((item) => {
    const salaryValue = parseSalaryString(item.dataset.salary);

    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: salaryValue,
      age: Number(item.dataset.age),
    };
  });

  return employeesArray;
}
