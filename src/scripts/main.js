'use strict';

const listElement = document.querySelector('ul');

// Хелпер для очистки зарплаты
const getNumericSalary = (salaryStr) => Number(salaryStr.replace(/[^\d]/g, ''));

const sortList = (list) => {
  const itemsArray = [...list.children];

  itemsArray.sort((a, b) => {
    return (
      getNumericSalary(b.dataset.salary) - getNumericSalary(a.dataset.salary)
    );
  });

  list.append(...itemsArray);
};

const getEmployees = (list) => {
  const itemsArray = [...list.children];

  return itemsArray.map((li) => {
    return {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: getNumericSalary(li.dataset.salary),
      age: Number(li.dataset.age),
    };
  });
};

sortList(listElement);
getEmployees(listElement);
