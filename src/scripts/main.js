'use strict';

function sortList(list) {
  const listEmployees = document.querySelector('ul');
  const employees = document.querySelectorAll(`[${list}]`);

  const sortedEmployees = [...employees].sort((wage1, wage2) => {
    return getSalary(wage2.getAttribute(list))
      - getSalary(wage1.getAttribute(list));
  });

  return sortedEmployees.forEach(person => {
    listEmployees.appendChild(person);
  });
}

function getEmployees(list) {
  const employees = document.querySelectorAll(`${list}`);

  return [...employees].map(person => {
    return {
      name: person.innerText,
      position: person.dataset.position,
      salary: getSalary(person.dataset.salary),
      age: person.dataset.age,
    };
  });
}

function getSalary(string) {
  return +string.replace(',', '').slice(1);
}

sortList('data-salary');
getEmployees('li');
