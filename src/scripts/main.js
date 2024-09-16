'use strict';

const employeesList = [ ...document.querySelectorAll('li') ];

sortList(employeesList);
getEmployees(employeesList);

function sortList(list) {
  list.sort((a, b) => {
    const salaryA = a.dataset.salary.replace(/\D/g, '');
    const salaryB = b.dataset.salary.replace(/\D/g, '');

    return salaryB - salaryA;
  });

  for (const person of list) {
    document.querySelector('ul').append(person);
  }
}

function getEmployees(list) {
  const employees = [];

  for (const person of list) {
    employees.push({
      name: person.innerText,
      position: person.dataset.position,
      salary: person.dataset.salary,
      age: person.dataset.age,
    });
  }

  return employees;
}
