'use strict';

// write code here
const employees = document.querySelectorAll('li');
const parentEmployees = document.querySelector('ul');

function stringToNumber(string) {
  return +string.replace(/\D/g, '');
}

function sortList(list) {
  const resultSortList = [...list].sort((a, b) => {
    const aSalary = stringToNumber(a.dataset.salary);
    const bSalary = stringToNumber(b.dataset.salary);

    return bSalary - aSalary;
  });

  resultSortList.forEach(employee => {
    parentEmployees.append(employee);
  });
}

function getEmployees(list) {
  return [...list].reduce((acc, curr) => {
    return [...acc, {
      name: curr.textContent.trim(),
      position: curr.dataset.position,
      salary: curr.dataset.salary,
      age: curr.dataset.age,
    }];
  }, []);
}

sortList(employees);
getEmployees(employees);
