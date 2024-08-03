'use strict';

const listEmployeeElements = document.getElementsByTagName('li');

const sortedList = sortList(listEmployeeElements);

getEmployees(listEmployeeElements);

for (let i = 0; i < listEmployeeElements.length; i++) {
  listEmployeeElements[i].outerHTML = sortedList[i].outerHTML;
}

function getEmployees(list) {
  return [...list].map((e) => ({
    name: e.innerText,
    position: e.getAttribute('data-position'),
    salary: e.getAttribute('data-salary'),
    age: e.getAttribute('data-age'),
  }));
}

function sortList(list) {
  return [...list].sort(
    (a, b) =>
      +b.getAttribute('data-salary').replace(/\D/g, '') -
      +a.getAttribute('data-salary').replace(/\D/g, ''),
  );
}
