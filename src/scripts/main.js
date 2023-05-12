'use strict';

const list = document.getElementsByTagName('ul')[0];
const items = list.getElementsByTagName('li');

function sortList() {
  const arraySalary = [...items].sort((a, b) => {
    const firstSalary = +a.dataset.salary.replace('$', '').replace(',', '');
    const secondSalary = +b.dataset.salary.replace('$', '').replace(',', '');

    return secondSalary - firstSalary;
  });

  for (let i = 0; i < arraySalary.length; i++) {
    list.appendChild(arraySalary[i]);
  }
}

function getEmployees() {
  const arrayEmployees = [...items].map(item => {
    const nameEmploye = item.innerHTML.trim();
    const positionEmploye = item.dataset.position;
    const salaryEmploye = item.dataset.salary;
    const ageEmploye = item.dataset.age;

    return {
      nameEmploye, positionEmploye, salaryEmploye, ageEmploye,
    };
  });

  return arrayEmployees;
}

sortList();
getEmployees();
