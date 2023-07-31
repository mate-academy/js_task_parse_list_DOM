'use strict';

function convertToNumber(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

function sortList(listProperty) {
  const list = document.querySelectorAll(listProperty);
  const items = [...list];

  items.sort((a, b) => {
    const salaryA = convertToNumber(a.dataset.salary);
    const salaryB = convertToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  const ulElement = list[0].parentNode;

  ulElement.innerHTML = '';
  ulElement.append(...items);
}

function getEmployees(listProperty) {
  const list = document.querySelectorAll(listProperty);

  const employees = [...list].map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: convertToNumber(item.dataset.salary),
      age: Number(item.dataset.age),
    };
  });

  return employees;
}

sortList('li');

getEmployees('li');
