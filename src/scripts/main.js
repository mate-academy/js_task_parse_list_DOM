'use strict';

const ul = document.querySelector('ul');

function salaryToNumber(salary) {
  return parseInt(salary.replace(/\$|,/g, ''));
}

function getEmployees(list) {
  const employees = [];

  for (const person of list.children) {
    const salary = person.getAttribute('data-salary');
    const position = person.getAttribute('data-position');
    const age = person.getAttribute('data-age');
    const nameOfPerson = person.innerText;
    const personObject = {
      name: nameOfPerson,
      position,
      salary,
      age,
    };

    employees.push(personObject);
  }

  return employees;
}

function sortList(list) {
  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const aSalary = a.getAttribute('data-salary');
    const bSalary = b.getAttribute('data-salary');

    return salaryToNumber(bSalary) - salaryToNumber(aSalary);
  });

  listItems.forEach(item => {
    list.append(item);
  });
}

sortList(ul);
getEmployees(ul);
