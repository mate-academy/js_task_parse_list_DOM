'use strict';

const listOfEmployers = document.querySelector('ul');
const employers = document.querySelectorAll('li');

const employersArray = [];

const getEmployees = () => {
  for (const employer of employers) {
    const fullName = employer.innerText;
    const position = employer.getAttribute('data-position');
    const salary = employer.getAttribute('data-salary');
    const age = employer.getAttribute('data-age');

    employersArray.push({
      name: fullName,
      position,
      salary,
      age,
    });
  }
};

getEmployees();

const sortList = () => {
  const copyEmployers = [...employers];

  copyEmployers.sort((firstEmp, secondEmp) =>
    parseInt(secondEmp.dataset.salary.slice(1))
    - parseInt(firstEmp.dataset.salary.slice(1)));

  for (const employer of copyEmployers) {
    listOfEmployers.append(employer);
  }
};

sortList();
