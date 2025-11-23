'use strict';

// write code here
const allELem = document.querySelector('ul');
const listOfEmployee = Array.from(document.querySelectorAll('li'));

function parseSalary(str) {
  return Number(str.replaceAll('$', '').replaceAll(',', ''));
}

function sortList(list, listElement) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (
        parseSalary(list[j].dataset.salary) <
        parseSalary(list[j + 1].dataset.salary)
      ) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }
  list.forEach((li) => listElement.appendChild(li));
}

function getEmployees(list) {
  const employees = [];

  list.forEach((li) =>
    employees.push({
      name: li.textContent,
      position: li.dataset.position,
      salary: parseSalary(li.dataset.salary),
      age: Number(li.dataset.age),
    }),
  );

  return employees;
}

sortList(listOfEmployee, allELem);

getEmployees(listOfEmployee);
