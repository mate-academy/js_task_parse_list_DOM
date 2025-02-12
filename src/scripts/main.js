'use strict';

const employees = document.querySelectorAll('[data-salary]');
const ulElement = document.querySelector('ul');

function sortList(employ) {
  const sortedArray = [...employ].sort((a, b) => {
    let aSalary = a.getAttribute('data-salary');
    let bSalary = b.getAttribute('data-salary');

    if (!aSalary || !bSalary) {
      return 0;
    }

    aSalary = Number(aSalary.replace(/[^0-9.]/g, ''));
    bSalary = Number(bSalary.replace(/[^0-9.]/g, ''));

    return bSalary - aSalary;
  });

  ulElement.innerHTML = '';

  sortedArray.forEach((el) => ulElement.append(el));
}

function getEmployees(liList) {
  return [...liList].map((el) => ({
    name: el.textContent.replace(/[\n\r]/g, '').trim(),
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

sortList(employees);
getEmployees(employees);
