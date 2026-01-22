'use strict';

// write code here
const listOfEmployeesFromHtml = document.querySelector('ul');

function parceSalary(salary) {
  return parseFloat(salary.replace(/[$,]/g, ''));
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    return parceSalary(b.dataset.salary) - parceSalary(a.dataset.salary);
  });

  list.innerHTML = '';

  items.forEach((li) => {
    list.appendChild(li);
  });
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parceSalary(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });
}

sortList(listOfEmployeesFromHtml);

const employeesArray = getEmployees(listOfEmployeesFromHtml);

// eslint-disable-next-line no-console
console.log(employeesArray);
