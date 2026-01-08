'use strict';

// Forced by task requirements

const getFloat = (str) => parseFloat(str.replace(/\D/g, ''));

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => {
    const aSalary = getFloat(a.dataset.salary);
    const bSalary = getFloat(b.dataset.salary);

    return bSalary - aSalary;
  });

  list.innerHTML = '';
  list.append(...items);
}

function getEmployees(list) {
  return [...list.children].map((li) => ({
    name: li.dataset.name,
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: li.dataset.age,
  }));
}

const employeesList = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);
