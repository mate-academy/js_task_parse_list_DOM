'use strict';

const employees = document.querySelectorAll('li');
const employeesList = document.querySelector('ul');

function sortList(people) {
  const getSalary = person => Number(person.dataset.salary.replace(/\W/g, ''));

  const peopleList = [...people]
    .sort((person1, person2) => getSalary(person2) - getSalary(person1));

  employeesList.append(...peopleList);
};

function getEmployees(people) {
  return people.map(person => {
    return {
      name: person.innerText,
      ...person.dataset,
    };
  });
}

sortList(employees);
getEmployees(employees);
