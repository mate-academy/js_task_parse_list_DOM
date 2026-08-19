'use strict';

const list = document.querySelector('ul');
const elements = list.querySelectorAll('[data-salary]');
const elementsParent = list;

const peopleBySalary = [];

function getTotalSalary(value) {
  let salary = '';
  const numbers = '0123456789';

  value.split('').forEach((char) => {
    if (numbers.includes(char)) {
      salary += char;
    }
  });

  return +salary;
}

function sortList(listProperty) {
  [...elements].forEach((element) => {
    const salaryValue = element.getAttribute('data-salary');
    const salary = getTotalSalary(salaryValue);

    peopleBySalary.push([salary, element]);
  });

  peopleBySalary.sort((value1, value2) => {
    return value2[0] - value1[0];
  });

  peopleBySalary.forEach((person, index) => {
    elementsParent.appendChild(peopleBySalary[index][1]);
  });
}

function getEmployees(listProperty) {
  const employeeElements = listProperty.querySelectorAll('[data-salary]');

  return [...employeeElements].map((element) => {
    return {
      name: element.innerText,
      position: element.getAttribute('data-position'),
      salary: getTotalSalary(element.getAttribute('data-salary')),
      age: Number(element.getAttribute('data-age')),
    };
  });
}

sortList(list);
getEmployees(list);
