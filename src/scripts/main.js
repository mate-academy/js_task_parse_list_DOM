'use strict';

const listEmployees = document.querySelectorAll('[data-salary]');

const sortList = (list) => {
  const UL = document.querySelector('ul');

  const orderedListEmployees = [...list].sort((a, b) => {
    const salaryA = a.getAttribute('data-salary').replace(/\D/g, '');
    const salaryB = b.getAttribute('data-salary').replace(/\D/g, '');

    return salaryB - salaryA;
  });

  orderedListEmployees.forEach((element) => {
    UL.appendChild(element);
  });
};

const getEmployees = (list) => {
  const arrEmployees = [...list].map((element) => {
    const nameEmployee = element.textContent.trim();
    const positionEmployee = element.getAttribute('data-position');
    const salaryEmployee = element.getAttribute('data-salary');
    const ageEmployee = element.getAttribute('data-age');

    return {
      name: nameEmployee,
      position: positionEmployee,
      salary: salaryEmployee,
      age: ageEmployee,
    };
  });

  return arrEmployees;
};

sortList(listEmployees);
getEmployees(listEmployees);
