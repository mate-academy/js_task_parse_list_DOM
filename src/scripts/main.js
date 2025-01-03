'use strict';

const employeesList = document.querySelector('ul');
const convertToString = (string) => {
  return string.slice(1).split(',').join('');
};

function sortList(list) {
  const sortedList = [...list.children].sort(
    (a, b) =>
      convertToString(a.dataset.salary) - convertToString(b.dataset.salary),
  );

  return list.append(...sortedList);
}

function getEmployees(list) {
  return [...list.children].map((person) => ({
    name: person.innerHTML.trim(),
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(employeesList);
getEmployees(employeesList);
