'use strict';

const ulElement = document.querySelector('ul');
// const listItem = document.querySelectorAll('ul li');

function parseSalary(salaryString) {
  return Number(salaryString.replace(/[$,]/g, ''));
}

function sortList(list) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  itemsArray.forEach((item) => list.appendChild(item));
}

function getEmployess(list) {
  const employeesArray = Array.from(list.children).map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });

  return employeesArray;
}

sortList(ulElement);

getEmployess(ulElement);
