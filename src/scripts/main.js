'use strict';

const list = document.querySelector('ul');
const items = list.children;

const parseSalary = (salaryString) => {
  return Number(salaryString.replace(/[$,]/g, ''));
};

const sortList = (listElement) => {
  const itemsArray = Array.from(items);

  itemsArray.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  listElement.append(...itemsArray);
};

const getEmployees = (listElement) => {
  return Array.from(listElement.children).map((emploee) => {
    return {
      name: emploee.textContent.trim(),
      position: emploee.dataset.position,
      salary: parseSalary(emploee.dataset.salary),
      age: +emploee.dataset.age,
    };
  });
};

sortList(list);

getEmployees(list);
