'use strict';

const parentContainer = document.querySelector('ul');
const allSalaryElements = [...document.querySelectorAll('[data-salary]')];

parentContainer.innerHTML = '';

function convertSalary(element) {
  return element.dataset.salary.replace('$', '').replace(',', '.');
}

function sortList(list) {
  const sortedList = list.sort((liPrev, liNext) => {
    const salaryPrev = Number(convertSalary(liPrev));
    const salaryNext = Number(convertSalary(liNext));

    return salaryNext - salaryPrev;
  });

  sortedList.forEach((li) => parentContainer.appendChild(li));
}

function getEmployees(list) {
  return list.map((li) => {
    return {
      name: li.dataset.name,
      position: li.dataset.position,
      salary: Number(convertSalary(li)),
      age: Number(li.dataset.age),
    };
  });
}

sortList(allSalaryElements);
getEmployees(allSalaryElements);
