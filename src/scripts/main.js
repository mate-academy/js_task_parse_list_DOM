'use strict';

function sortList(list) {
  function toNumber(element) {
    return Number(
      element.dataset.salary.split('$').join('').split(',').join('')
    );
  }

  const sortedList = [...list.children].sort((a, b) => {
    return toNumber(b) - toNumber(a);
  });

  list.append(...sortedList);
}

function getEmployees(list) {
  const callback = (arr, person) => {
    return [
      ...arr,
      {
        name: person.textContent.trim(),
        position: person.dataset.position,
        salary: person.dataset.salary,
        age: +person.dataset.age,
      },
    ];
  };
  const employees = [...list.children].reduce(callback, []);

  return employees;
}

const employeesList = document.querySelector('ul');

sortList(employeesList);
getEmployees(employeesList);
