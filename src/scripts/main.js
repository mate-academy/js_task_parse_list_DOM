'use strict';

const collectionLi = [...document.querySelectorAll('li')];

function getEmployees(list) {
  const employees = [];

  list.forEach((employee) => {
    employees.push({
      name: employee.textContent.trim(),
      position: employee.getAttribute('data-position'),
      salary: Number(
        employee
          .getAttribute('data-salary')
          .replaceAll('$', '')
          .replaceAll(',', ''),
      ),
      age: employee.getAttribute('data-age'),
    });
  });

  return employees;
}

function sortList(list) {
  if (list.length <= 1) {
    return list;
  }

  const pivot = list[list.length - 1];
  const right = list.filter((element) => element.salary < pivot.salary);
  const left = list.filter((element) => element.salary > pivot.salary);
  const equal = list.filter((element) => element.salary === pivot.salary);

  return [...sortList(left), ...equal, ...sortList(right)];
}

const unsortedEmployees = getEmployees(collectionLi);
const sortedEmployees = sortList(unsortedEmployees);

const ul = document.querySelector('ul');

ul.innerHTML = '';

sortedEmployees.forEach((employee) => {
  const li = document.createElement('li');

  li.textContent = employee.name;
  li.setAttribute('data-position', employee.position);
  li.setAttribute('data-salary', employee.salary);
  li.setAttribute('data-age', employee.age);
  ul.appendChild(li);
});
