'use strict';

// write code here
const listEmployee = document.querySelectorAll('li');

function parseSalary(salaryString) {
  const cleanedString = salaryString.replace(/[^0-9.-]+/g, '');

  return parseFloat(cleanedString);
}

function sortList(list) {
  return [...list].sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });
}

function getEmployees(list) {
  return list.map((item) => {
    const { position, salary, age } = item.dataset;
    const nameObj = item.textContent.trim();

    return {
      nameObj,
      position,
      salary: parseSalary(salary),
      age: parseInt(age),
    };
  });
}

const sortedList = sortList(listEmployee);
const ul = document.querySelector('ul');

ul.innerHTML = '';
sortedList.forEach((item) => ul.appendChild(item));
getEmployees(sortedList);
