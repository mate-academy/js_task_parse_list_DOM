'use strict';

const elements = document.querySelectorAll('[data-salary]');
const elementsParent = [...elements][0].parentElement;

elements.forEach((element) => element.remove());

const peopleBySalary = [];

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
