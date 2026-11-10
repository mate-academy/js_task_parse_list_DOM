'use strict';

const employeesList = document.querySelector('ul');

function getSalary(employee) {
  const salary = employee.dataset.salary;

  return parseFloat(salary.replace('$', '').replace(',', ''));
}

function sortList(list) {
  const items = list.querySelectorAll('li');
  const itemsArray = Array.from(items);

  itemsArray.sort((a, b) => getSalary(b) - getSalary(a));

  itemsArray.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.querySelectorAll('li')).map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: getSalary(item),
      age: parseInt(item.dataset.age, 10),
    };
  });
}

sortList(employeesList);

getEmployees(employeesList);
