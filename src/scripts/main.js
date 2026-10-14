'use strict';

const dataSet = document.querySelector('ul');

sortList(dataSet);

getEmployees(dataSet);

function getEmployees(list) {
  const items = list.querySelectorAll('li');

  const employees = [];

  items.forEach((item) => {
    const employee = {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: convertToNumber(item.dataset.salary),
      age: Number(item.dataset.age),
    };

    employees.push(employee);
  });

  return employees;
}

function convertToNumber(string) {
  let salary = string.replace('$', '');

  salary = salary.replace(',', '');

  return Number(salary);
}

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort((item1, item2) => {
    const salary1 = convertToNumber(item1.dataset.salary);
    const salary2 = convertToNumber(item2.dataset.salary);

    return salary2 - salary1;
  });

  items.forEach((item) => {
    list.append(item);
  });
}
