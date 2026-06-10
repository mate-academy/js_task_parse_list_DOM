'use strict';

const liElements = [...document.querySelectorAll('li')];

function sortList(list) {
  const ul = list[0].parentNode;
  const sortProperty = 'salary';

  list.sort(
    (li1, li2) =>
      strToNumber(li2.dataset[sortProperty]) -
      strToNumber(li1.dataset[sortProperty]),
  );

  list.forEach((li) => ul.append(li));
}

function strToNumber(str) {
  return Number(str.replace(/[$,]/g, ''));
}

function getEmployees(list) {
  const employees = [];

  for (const li of list) {
    const employee = {
      name: li.textContent.trim(),
      position: li.dataset.position,
      salary: strToNumber(li.dataset.salary),
      age: Number(li.dataset.age),
    };

    employees.push(employee);
  }

  return employees;
}

sortList(liElements);
getEmployees(liElements);
