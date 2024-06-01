'use strict';

const sortList = document.querySelector('ul');

const getSalary = (salary) => {
  return +salary.slice(1).replace(',', '');
};

const getEmployees = (value) => {
  const arryList = Array.from(value.children);

  arryList.sort(
    (a, b) =>
      getSalary(b.getAttribute('data-salary')) -
      getSalary(a.getAttribute('data-salary')),
  );

  arryList.forEach((item) => value.appendChild(item));
};

getEmployees(sortList);
