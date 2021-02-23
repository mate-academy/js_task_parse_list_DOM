'use strict';

const employees = document.querySelectorAll('li');
const employeesList = document.querySelector('ul');

function convertationToNumber(item) {
  return item.split('').slice(1).join('').split(',').join('');
}

function sortList(humans) {
  const sorted = [...humans].sort((currentPerson, nextPerson) => {
    const currentPersonToNumber
      = convertationToNumber(currentPerson.dataset.salary);
    const nextPersonToNumber
      = convertationToNumber(nextPerson.dataset.salary);

    return +nextPersonToNumber - +currentPersonToNumber;
  });

  employeesList.append(...sorted);
};

function getEmployees(emp) {
  [...emp].map(person => ({
    ...person,
    ...person.dataset,
    name: person.innerText,
  }));
}

sortList(employees);
getEmployees(employees);
