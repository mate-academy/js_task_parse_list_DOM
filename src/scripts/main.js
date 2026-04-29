'use strict';

function parseSalary(salary) {
  return parseInt(salary.replace('$', '').replace(',', ''), 10);
}

function sortList(listElement) {
  const employeeNodes = Array.from(listElement.querySelectorAll('li'));

  employeeNodes.sort((firstEmployee, secondEmployee) => {
    return (
      parseSalary(secondEmployee.dataset.salary) -
      parseSalary(firstEmployee.dataset.salary)
    );
  });

  listElement.append(...employeeNodes);
}

function getEmployees(listElement) {
  return Array.from(listElement.querySelectorAll('li')).map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: parseInt(item.dataset.age, 10),
    };
  });
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
