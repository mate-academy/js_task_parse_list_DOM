'use strict';

// eslint-disable-next-line no-shadow
function sortList(employees) {
  const sorted = employees.sort((firstElement, secondElement) => {
    return (converter(secondElement.getAttribute('data-salary'))
      - converter(firstElement.getAttribute('data-salary')));
  });

  document.body.children[1].append(...sorted);
}

// eslint-disable-next-line no-shadow
function getEmployees(arrayEmployees) {
  return arrayEmployees.map(employee => {
    return {
      name: employee.innerHTML.trim(),
      position: employee.getAttribute('data-position'),
      salary: employee.getAttribute('data-salary'),
      age: employee.getAttribute('data-age'),
    };
  });
}

function converter(salary) {
  return salary.replaceAll(',', '').replace('$', '');
}

const employees = [...document.body.children[1].children];

sortList(employees);

// eslint-disable-next-line no-console
console.log(getEmployees(employees));
