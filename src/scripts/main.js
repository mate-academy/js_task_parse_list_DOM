'use strict';

function sortListBySalary() {
  const listItems = document.querySelectorAll('li');

  const itemsArray = Array.from(listItems);

  itemsArray.sort((a, b) => {
    const salaryA = parseFloat(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = parseFloat(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  const list = document.querySelector('ul');

  list.innerHTML = '';

  itemsArray.forEach((item) => {
    list.appendChild(item);
  });
}

function getEmployeesArray() {
  const listItems = document.querySelectorAll('li');

  const employees = Array.from(listItems).map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseFloat(item.dataset.salary.replace(/[$,]/g, '')),
      age: parseInt(item.dataset.age, 10),
    };
  });

  return employees;
}

sortListBySalary();

const employees = getEmployeesArray();

console.log(employees);
