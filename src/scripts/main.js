'use strict';

const salaryList = [...document.querySelectorAll('li')];

function strToNum(str) {
  return parseInt(str.replace(/[^0-9]/g, ''));
}

function sortList(list) {
  list.sort((a, b) => {
    return (
      strToNum(b.getAttribute('data-salary')) -
      strToNum(a.getAttribute('data-salary'))
    );
  });

  const parentEl = document.querySelector('ul');

  while (parentEl.firstChild) {
    parentEl.removeChild(parentEl.firstChild);
  }

  list.forEach((item) => {
    parentEl.appendChild(item);
  });
}

function getEmployees(list) {
  return list.map((a) => {
    const employeesName = a.textContent.trim();
    const salaryStr = a.getAttribute('data-salary');

    return {
      name: employeesName,
      position: a.getAttribute('data-position'),
      salary: parseFloat(salaryStr.replace(/[^0-9.-]+/g, '')),
      age: a.getAttribute('data-age'),
    };
  });
}

sortList(salaryList);

getEmployees(salaryList);

const arraySorted = getEmployees(salaryList);

arraySorted.sort((a, b) => b.salary - a.salary);

//to see sorted Array => console.log(arraySorted)
