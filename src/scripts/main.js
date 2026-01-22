'use strict';

// write code here
const listOfEmployeesFromHtml = document.querySelector('ul');
const employeesFromHtml = Array.from(document.querySelectorAll('li'));

function parceSalary(salary) {
  return parseFloat(salary.replace(/[$,]/g, ''));
}

function sortList(listElement, items) {
  items.sort((a, b) => {
    return parceSalary(b.dataset.salary) - parceSalary(a.dataset.salary);
  });

  listElement.innerHTML = '';

  items.forEach((li) => {
    listElement.appendChild(li);
  });
}

function getEmployees(items) {
  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parceSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

sortList(listOfEmployeesFromHtml, employeesFromHtml);

const employeesArray = getEmployees(employeesFromHtml);

// eslint-disable-next-line no-console
console.log(employeesArray);
