'use strict';

function getCorrectSalary(salary) {
  return +salary.replace('$', '').replace(',', '');
}

function sortListBySalary(list) {
  const listOfElements = [...document.querySelectorAll('li')];

  listOfElements.sort(
    (a, b) =>
      getCorrectSalary(b.dataset.salary) - getCorrectSalary(a.dataset.salary),
  );

  listOfElements.forEach((item) => list.appendChild(item));
}

function getArrayOfEmployees(list) {
  const result = [];

  list.querySelectorAll('li').forEach((element) => {
    const person = {
      name: element.innerText,
      position: element.dataset.position,
      salary: getCorrectSalary(element.dataset.salary),
      age: element.dataset.age,
    };

    result.push(person);
  });

  return result;
}

sortListBySalary(document.querySelector('ul'));
getArrayOfEmployees(document.querySelector('ul'));
