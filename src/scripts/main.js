'use strict';

const listDocument = document.querySelectorAll('li');

function sortList(list) {
  const listPersonWistSalary = [...list].map(
    elem => ({
      'name': elem.innerText,
      'salary': +(elem.getAttribute('data-salary')
        .replace(/,/g, '').slice(1)),
    })
  );

  return listPersonWistSalary.sort((a, b) => b.salary - a.salary);
}

function getEmployees(list) {
  return [...list].map(
    elem => ({
      'name': elem.innerText,
      'position': elem.getAttribute('data-position'),
      'salary': elem.getAttribute('data-salary'),
      'age': +elem.getAttribute('data-age'),
    })
  );
}

sortList(listDocument);
getEmployees(listDocument);
