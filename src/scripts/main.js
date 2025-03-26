'use strict';

const listOfEmployees = [...document.querySelectorAll('ul li')];

function sortList(list) {
  const ulElement = list[0].parentElement;
  let sortedList = [];

  sortedList = list.sort(
    (a, b) =>
      +b.dataset.salary.slice(1).split(',').join('') -
      +a.dataset.salary.slice(1).split(',').join(''),
  );
  ulElement.innerHTML = '';
  sortedList.forEach((employee) => ulElement.appendChild(employee));
}

sortList(listOfEmployees);

function getEmployees(list) {
  list.map((employee) => {
    return {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };
  });
}

getEmployees(listOfEmployees);
