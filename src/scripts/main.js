'use strict';

// write code here
const firstElement = document.body.querySelector('ul');
const listItems = firstElement.querySelectorAll('li');

function getSalary(employee) {
  const salaryStr = employee.getAttribute('data-salary').replace(',', '');
  const salary = +salaryStr.replace('$', '');

  return salary;
}

function sortList(list) {
  return Array.from(list).sort((a, b) => getSalary(b) - getSalary(a));
}

firstElement.append(...sortList(listItems));

function getEmployees(list) {
  return Array.from(list).map((value) => {
    return {
      name: value.dataset.name,
      position: value.dataset.position,
      salary: value.dataset.salary,
      age: +value.dataset.age,
    };
  });
}

sortList(listItems);
getEmployees(listItems);
