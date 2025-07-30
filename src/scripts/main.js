'use strict';

const listEmployee = [...document.querySelectorAll('ul li')];

function sortList(list) {
  list.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  const ul = list[0].parentNode;

  list.forEach((li) => ul.appendChild(li));
}

sortList(listEmployee);

function getEmployees(list) {
  const arrayOfEmployees = [];

  list.forEach((li) => {
    arrayOfEmployees.push({
      name: li.innerText,
      position: li.dataset.position,
      salary: li.dataset.salary,
      age: li.dataset.age,
    });
  });

  return arrayOfEmployees;
}

getEmployees(listEmployee);
