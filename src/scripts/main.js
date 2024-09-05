'use strict';

const listElements = document.getElementsByTagName('li');

function sortList(list) {
  const itemsArray = Array.from(list);

  itemsArray.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  itemsArray.forEach((item) => list[0].parentElement.appendChild(item));
}

function parseSalary(salary) {
  return parseFloat(salary.replace('$', '').replace(',', ''));
}

function getEmployees(list) {
  const itemArray = Array.from(list);

  return itemArray.map((el) => {
    return {
      name: el.textContent.trim(),
      position: el.dataset.position,
      salary: parseSalary(el.dataset.salary),
      age: parseInt(el.dataset.age),
    };
  });
}

getEmployees(listElements);

sortList(listElements);
