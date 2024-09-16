'use strict';

const ulListRef = [...document.querySelector('ul').children];
const newList = document.querySelector('ul');

function formatSalary(salary) {
  return +salary.replaceAll(',', '').slice(1);
}

function sortList(list) {
  const sortedList = [...list];

  sortedList.sort((firstEmployee, secondEmployee) => {
    const firstEmployeeSalary = formatSalary(firstEmployee.dataset.salary);
    const secondEmployeeSalary = formatSalary(secondEmployee.dataset.salary);

    return secondEmployeeSalary - firstEmployeeSalary;
  });

  newList.innerHTML = `
  ${sortedList.map((element) => `<li>${element.textContent}</li>`).join('')}`;

  return sortedList;
}

function getEmployees(list) {
  const arrayOfEmployees = list.map((employee) => {
    const employeeData = employee.dataset;

    return {
      fullname: employee.innerText.trim(),
      position: employeeData.position,
      salary: employeeData.salary,
      age: +employeeData.age,
    };
  });

  return arrayOfEmployees;
}

sortList(ulListRef);
getEmployees(ulListRef);
