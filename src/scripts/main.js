'use strict';

// write code here
const list = document.querySelector('ul');

function getEmployees(poeple) {
  const employees = [];

  poeple.forEach((person) => {
    employees.push({
      element: person,
      name: person.dataset.name,
      position: person.dataset.position,
      salary: person.dataset.salary.replace('$', '').replace(/,/g, ''),
      age: person.dataset.age,
    });
  });

  return employees;
}

function sortList(soringList) {
  const employees = getEmployees([...soringList.children]);

  employees.sort((a, b) => {
    return b.salary - a.salary;
  });

  employees.forEach((employee) => {
    list.append(employee.element);
  });
}

sortList(list);
