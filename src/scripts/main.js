'use strict';

const employees = document.querySelector('ul');
const num = (string) => Number(string.replace(/[$,]/g, ''));

function sortList(list) {
  const sortedPeopleList = [...list.children].sort(
    (previousPerson, currentPerson) =>
      num(currentPerson.dataset.salary) - num(previousPerson.dataset.salary),
  );

  return list.append(...sortedPeopleList);
}

function getEmployees(list) {
  return [...list.children].map((person) => ({
    name: person.innerText,
    position: person.dataset.position,
    salary: person.dataset.salary,
    age: person.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
