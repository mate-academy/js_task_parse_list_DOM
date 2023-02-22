'use strict';

const ulList = [...document.querySelector('ul').children];
const newList = document.querySelector('ul');

function formatSalary(employee) {
  const salary = employee.dataset.salary;
  const formattedSalary = +salary.replaceAll(',', '').slice(1);

  return formattedSalary;
}

function sortList(list) {
  const sortedList = [...list]

  sortedList.sort(
    (firstEmployee, secondEmployee) =>
      formatSalary(secondEmployee) - formatSalary(firstEmployee)
  );

  newList.innerHTML = `
  ${list.map((element) => `<li>${element.textContent}</li>`).join('')}`;

  return sortedList;
}

function getEmployees(list) {
  const arrayOfEmployees = [];

  const employeeData = list.map((element) => element.dataset);

  for (let i = 0; i < employeeData.length; i++) {
    const employeeObject = {};
    const trimmedEmployeeName = list[i].innerText.trim();

    employeeObject.name = trimmedEmployeeName;

    for (const key in employeeData[i]) {
      employeeObject[key] = employeeData[i][key];
    }

    arrayOfEmployees.push(employeeObject);
  }

  return arrayOfEmployees;
}

sortList(ulList);
getEmployees(ulList);
