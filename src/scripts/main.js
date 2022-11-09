'use strict';

function num(string) {
  return string.replace(/[,$]/g, '');
}

const listEmployees = Array.from(document.querySelectorAll('ul > li'));

sortList(listEmployees);

function sortList(list) {
  list.sort((a, b) =>
    num(b.dataset.salary) - num(a.dataset.salary)).forEach(employee => {
    document.querySelector('ul').append(employee);
  });
}

function getEmployees(list) {
  return list.map(employee => {
    return {
      name: employee.innerText, ...employee.dataset,
    };
  });
}

getEmployees(listEmployees);
