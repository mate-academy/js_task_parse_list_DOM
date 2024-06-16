'use strict';

const employeesList = [...document.querySelectorAll('li')];
const employeesContainer = document.querySelector('ul');

function sortList(list, dataContainer) {
  const sortedList = list.sort((a, b) => {
    const salaryA = +a.dataset.salary.slice(1).replace(',', '');
    const salaryB = +b.dataset.salary.slice(1).replace(',', '');

    return salaryB - salaryA;
  });

  sortedList.forEach((employee) => dataContainer.append(employee));
}

function getEmployees(list) {
  return list.map((element) => {
    return {
      name: element.innerText,
      position: element.dataset.position,
      salary: +element.dataset.salary.slice(1).replace(',', ''),
      age: +element.dataset.age,
    };
  });
}

sortList(employeesList, employeesContainer);
getEmployees(employeesList);
