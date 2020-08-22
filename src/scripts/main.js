'use strict';

const employeesList = [...document.querySelectorAll('li')];

const sortEmployees = function(list) {
  list.sort((a, b) => salaryAmount(b.dataset.salary)
  - salaryAmount(a.dataset.salary));

  function salaryAmount(str) {
    return +str.substring(1).split(',').join('');
  };

  document.querySelector('ul').append(...employeesList);
};

const getEmployees = function(list) {
  return list.map(person => {
    return {
      name: person.textContent.trim(),
      ...person.dataset,
    };
  });
};

sortEmployees(employeesList);
getEmployees(employeesList);
