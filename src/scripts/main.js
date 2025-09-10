'use strict';

const listWrapper = document.getElementsByTagName('ul')[0];
const listElements = [...document.getElementsByTagName('li')];

function sortList(list) {
  return list.sort((a, b) => {
    const salaryA = a.dataset.salary.slice(1).replace(/,/g, '');
    const salaryB = b.dataset.salary.slice(1).replace(/,/g, '');

    return salaryB - salaryA;
  });
}

function getEmployees(list) {
  const employee = [];

  list.forEach((el) => {
    employee.push({
      name: el.textContent,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    });
  });

  return employee;
}

const sortedList = sortList(listElements);

// const employees = getEmployees(listElements);
getEmployees(listElements);

sortedList.forEach((el) => listWrapper.append(el));
