'use strict';

const employeesList = document.querySelectorAll('li');

function sortList(list) {
  return [...list].sort(
    (a, b) =>
      +b.getAttribute('data-salary').replace(/\D/g, '') -
      +a.getAttribute('data-salary').replace(/\D/g, ''),
  );
}

function getEmployees(list) {
  return [...list].map((e) => ({
    name: e.innerText,
    position: e.getAttribute('data-position'),
    salary: e.getAttribute('data-salary'),
    age: e.getAttribute('data-age'),
  }));
}

sortList(employeesList);
getEmployees(employeesList);

for (let i = 0; i < employeesList.length; i++) {
  employeesList[i].outerHTML = sortList(employeesList)[i].outerHTML;
}
