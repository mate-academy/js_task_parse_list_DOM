'use strict';

const employeesList = document.querySelector('ul');

const arrayEmpl = Array.from(employeesList.children);

function sortArayEmployes(masiv) {
  masiv.sort((a, b) => {
    return (
      +b.getAttribute('data-salary').match(/\d/g).join('') -
      +a.getAttribute('data-salary').match(/\d/g).join('')
    );
  });
}

function getEmployees(list) {
  employeesList.innerHTML = '';

  for (const employer of list) {
    employeesList.append(employer);
  }
}

sortArayEmployes(arrayEmpl);
getEmployees(arrayEmpl);
