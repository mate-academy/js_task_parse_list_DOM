'use strict';

const employeesList = document.querySelector('ul');

function getNumber(string) {
  return Number(string.replace(/[^0-9.-]+/g, ''));
}

function sortList(list) {
  const sortedList = [...list.children].sort(
    (item1, item2) =>
      getNumber(item2.dataset.salary) - getNumber(item1.dataset.salary),
  );

  return list.append(...sortedList);
}

function getEmployees(list) {
  return [...list.children].map((person) => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
