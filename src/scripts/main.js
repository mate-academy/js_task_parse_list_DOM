'use strict';

const listForm = document.querySelector('ul');

const sortList = (list) => {
  const listItems = Array.from(list.querySelectorAll('li'));

  listItems.sort((a, b) => {
    const salaryA = Number(a.getAttribute('data-salary').replace(/[$,]/g, ''));
    const salaryB = Number(b.getAttribute('data-salary').replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  listItems.forEach((item) => list.appendChild(item));
};

const getEmployees = (list) => {
  const listItems = list.querySelectorAll('li');
  const employeesArray = [];

  listItems.forEach((item) => {
    // eslint-disable-next-line no-shadow
    const name = item.textContent.trim();
    const position = item.getAttribute('data-position');
    const salary = item.getAttribute('data-salary');
    const age = Number(item.getAttribute('data-age'));

    employeesArray.push({
      name,
      position,
      salary,
      age,
    });
  });

  return employeesArray;
};

sortList(listForm);
getEmployees(listForm);
