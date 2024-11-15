'use strict';

// write code here
const lists = document.querySelector('ul');

sortList(lists);

function sortList(list) {
  const items = Array.from(list.children);
  // const list.children = [];

  items.sort((a, b) => {
    // отримую числове занчення зарплати
    const salaryA = parseFloat(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = parseFloat(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  const employeesList = [];

  // проходжусь по масиву
  list.querySelectorAll('li').forEach((item) => {
    employeesList.push({
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseFloat(item.dataset.salary.replace(/[$,]/g, '')),
      age: parseInt(item.dataset.age, 10),
    });
  });

  return employeesList;
}

const employees = document.querySelector('ul');

sortList(employees);
getEmployees(employees);
