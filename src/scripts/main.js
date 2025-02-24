'use strict';

function salaryToNumber(salary) {
  return +salary.replace(/[$,]/g, '');
}

function sortList(list) {
  return list.sort((el1, el2) => {
    return (
      salaryToNumber(el2.dataset.salary) - salaryToNumber(el1.dataset.salary)
    );
  });
}

function getEmployees(list) {
  return list.reduce(
    (array, el) => [
      ...array,
      {
        element: el,
        name: el.textContent,
        position: el.dataset.position,
        salary: salaryToNumber(el.dataset.salary),
        age: el.dataset.age,
      },
    ],
    [],
  );
}

const employeesElements = [...document.querySelectorAll('ul li')];

const sortedEmployees = getEmployees(sortList(employeesElements));

sortedEmployees.forEach((item) => {
  document.querySelector('ul').appendChild(item.element);
});
