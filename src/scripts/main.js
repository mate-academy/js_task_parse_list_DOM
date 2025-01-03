'use strict';

// write code here

const employeesList = document.querySelector('ul');

const num = (string) => {
  let cleaned = '';

  for (const char of string) {
    if (char !== '$' && char !== ',') {
      cleaned += char;
    }
  }

  return Number(cleaned);
};

function sortList(list) {
  const sortedPeopleList = [...list.children].sort(
    (prev, curr) => num(curr.dataset.salary) - num(prev.dataset.salary),
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

sortList(employeesList);
getEmployees(employeesList);
