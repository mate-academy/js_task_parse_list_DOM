'use strict';

function salaryMap(salary) {
  return Number(salary.replace('$', '').replace(',', ''));
}

function sortList(list) {
  Array.from(list.getElementsByTagName('LI'))
    .sort((a, b) => salaryMap(b.dataset.salary)
    - salaryMap(a.dataset.salary))
    .forEach(li => {
      list.appendChild(li);
    });
}

function getEmployees(list) {
  const finalArray = [];

  Array.from(list.getElementsByTagName('LI'))
    .forEach(person => {
      const employee = {
        name: person.innerText,
        position: person.dataset.position,
        salary: salaryMap(person.dataset.salary),
        age: +person.dataset.age,
      };

      finalArray.push(employee);
    });

  return finalArray;
}

sortList(document.querySelector('ul'));
getEmployees(document.querySelector('ul'));
