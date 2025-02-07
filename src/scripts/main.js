'use strict';

const allEmployes = [...document.querySelectorAll('[data-salary]')];
const papa = document.querySelector('ul');

allEmployes.sort(
  (a, b) =>
    b.getAttribute('data-salary').replace(/[$,]/g, '') -
    a.getAttribute('data-salary').replace(/[$,]/g, ''),
);

allEmployes.forEach((item) => papa.appendChild(item));

function getEmployees(collection) {
  const result = [];

  collection.forEach((item) => {
    const employ = {
      name: item.textContent,
      position: item.getAttribute('data-position'),
      salary: item.getAttribute('data-salary'),
      age: item.getAttribute('data-age'),
    };

    result.push(employ);
  });

  return result;
}
getEmployees(allEmployes);
