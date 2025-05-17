'use strict';

// write code here
const peopleList = document.querySelector('ul');
const items = Array.from(peopleList.querySelectorAll('li'));

const sortList = (list) => {
  const sortedItems = [...list].sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  peopleList.innerHTML = '';
  sortedItems.forEach((item) => peopleList.appendChild(item));
};
const getEmployees = (list) => {
  const employees = [];

  for (const item of list) {
    const objItem = {
      name: item.textContent,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };

    employees.push(objItem);
  }

  return employees;
};

sortList(items);
getEmployees(items);
