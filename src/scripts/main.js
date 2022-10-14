'use strict';

const ul = document.querySelector('ul');
const li = ul.querySelectorAll('li');

function sortList(list) {
  const arrOfData = [ ...list ].sort((a, b) => {
    return +(b.dataset.salary.replaceAll(/\D/g, ''))
      - +(a.dataset.salary.replaceAll(/\D/g, ''));
  });

  ul.append(...arrOfData);
}

function getEmployees(list) {
  return [ ...list ].map(employee => ({
    name: employee.innerText,
    ...employee.dataset,
  }));
}

sortList(li);
getEmployees(li);
