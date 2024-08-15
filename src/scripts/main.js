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
  const listOfEmployees = [];

  for (let i = 0; i < list.length; i++) {
    listOfEmployees.push({
      name: list[i].textContent.trim(),
      position: list[i].dataset.position,
      salary: parseSalary(list[i].dataset.salary),
      age: parseInt(list[i].dataset.age),
    });
  }

  return listOfEmployees;
}

getEmployees(listElements);
sortList(listElements);
