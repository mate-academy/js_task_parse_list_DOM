'use strict';

function sortList() {
  const list = [...document.querySelectorAll('li')];

  list.sort((a, b) => {
    const salaryA = Number(
      a.getAttribute('data-salary').replace(/[^0-9.-]+/g, ''),
    );
    const salaryB = Number(
      b.getAttribute('data-salary').replace(/[^0-9.-]+/g, ''),
    );

    return salaryB - salaryA;
  });

  const ulElement = document.querySelector('ul');

  ulElement.innerHTML = '';
  list.forEach((li) => ulElement.appendChild(li));
}

function getEmployees() {
  const list = [...document.querySelectorAll('li')];

  const employees = list.map((li) => {
    const employeeName = li.textContent.trim();
    const position = li.getAttribute('data-position');
    const salary = Number(
      li.getAttribute('data-salary').replace(/[^0-9]/g, ''),
    );
    const age = Number(li.getAttribute('data-age'));

    return {
      name: employeeName,
      position,
      salary,
      age,
    };
  });

  return employees;
}

sortList();
getEmployees();
